package com.yeoun.server.module.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yeoun.server.infra.JsonBuilder;
import com.yeoun.server.infra.exception.DuplicateUserException;
import com.yeoun.server.infra.exception.member.MemberNotFoundException;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.MemberType;
import com.yeoun.server.module.model.dto.MemberSignUpDto;
import com.yeoun.server.module.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final JsonBuilder jsonBuilder;
    private final ObjectMapper objectMapper;

    public Member findOne(Long memberId) {
        return memberRepository.findById(memberId).orElse(null);
    }

    public Page<Member> findAll(Pageable pageable) {
        return memberRepository.findAll(pageable);
    }

    public String signIn(JsonNode payload) {
        Member givenMember = buildUserFromJson(payload);
        Member expectedMember = findOptionalUserById(givenMember.getId());
        return buildUserSignInJsonResponse(expectedMember);
    }

    private Member buildUserFromJson(JsonNode payload) {
        return Member.builder()
                .memberId(payload.get("memberId").asLong())
                .email(payload.get("email").asText())
                .password(payload.get("password").asText())
                .name(payload.get("name").asText())
                .nickname(payload.get("nickname").asText())
                .profileImage(payload.get("profileImage").asText())
                .phone(payload.get("phone").asText())
                .memberType(MemberType.valueOf(payload.get("memberType").asText()))
                .build();
    }

    private Member findOptionalUserById(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new MemberNotFoundException());
    }

    private String buildUserSignInJsonResponse(Member member) {
        return jsonBuilder.buildJsonWithHeaderAndPayload(
                jsonBuilder.buildResponseHeader("SignInResponse", Long.toString(member.getId())),
                jsonBuilder.buildResponsePayloadFromText("name", member.getName())
        );
    }

    @Transactional
    public String signUp(JsonNode payload) throws JsonProcessingException {
        Member member = saveNewMember(payload);
        return jsonBuilder.buildJsonWithHeader("SignUpResponse", Long.toString(member.getId()));
    }

    @Transactional
    public Member saveNewMember(JsonNode payload) throws JsonProcessingException {
        MemberSignUpDto memberSignUpDto = objectMapper.treeToValue(payload, MemberSignUpDto.class);
        memberSignUpDto.validateFieldsNotNull();
        checkDuplicateUser(memberSignUpDto);
        return memberRepository.save(memberSignUpDto.toEntity());
    }

    private void checkDuplicateUser(MemberSignUpDto memberSignUpDto) {
        validateDuplicateId(memberSignUpDto.getId());
        validateDuplicateEmail(memberSignUpDto.getEmail());
    }

    private void validateDuplicateId(Long memberId) {
        Optional<Member> foundMembers = memberRepository.findById(memberId);
        if (foundMembers.isPresent())
            throw new DuplicateUserException("memberId=" + memberId);
    }

    private void validateDuplicateEmail(String email) {
        Optional<Member> foundMembers = memberRepository.findByEmail(email);
        if (!foundMembers.isEmpty())
            throw new DuplicateUserException("email=" + email);
    }

    public String signOut(Long memberId) {
        Member member = findRequiredUserById(memberId);
        memberRepository.save(member);
        return jsonBuilder.buildJsonWithHeader("SignOutResponse", Long.toString(memberId));
    }

    private Member findRequiredUserById(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new MemberNotFoundException());
    }
}
