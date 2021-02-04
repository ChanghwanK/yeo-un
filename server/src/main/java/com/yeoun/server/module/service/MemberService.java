package com.yeoun.server.module.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yeoun.server.infra.JsonBuilder;
import com.yeoun.server.infra.exception.DuplicateUserException;
import com.yeoun.server.module.model.domain.Member;
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

    public Member findMemberByName(String name) {
        return memberRepository.findByName(name).orElse(null);
    }

    public Page<Member> findAll(Pageable pageable) {
        return memberRepository.findAll(pageable);
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

}
