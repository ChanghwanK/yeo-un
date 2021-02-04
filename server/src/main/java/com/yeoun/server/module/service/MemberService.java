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

    public String signUp(JsonNode payload) throws JsonProcessingException {
        Member member = saveNewMember(payload);
        return jsonBuilder.buildJsonWithHeader("SignUpResponse", Long.toString(member.getId()));
    }

    private Member saveNewMember(JsonNode payload) throws JsonProcessingException {
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
