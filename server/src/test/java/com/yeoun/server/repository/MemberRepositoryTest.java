package com.yeoun.server.repository;

import com.yeoun.server.domain.Member;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
@DisplayName("Member Repository Test")
public class MemberRepositoryTest {

    @Autowired MemberRepository memberRepository;

    @Test
    public void save() {
        // given
        Member member = Member.builder()
                .name("jeongwon")
                .nickname("spring")
                .build();

        // when
        Long savedId = memberRepository.save(member);

        // then
        Assertions.assertEquals(member, memberRepository.findOne(savedId));
    }
}