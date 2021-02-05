package com.yeoun.server.module.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.dto.post.PostRequestDto;
import com.yeoun.server.module.repository.CategoryRepository;
import com.yeoun.server.module.repository.MemberRepository;
import com.yeoun.server.module.repository.PostRepository;
import com.yeoun.server.module.service.PostService;
import javax.xml.catalog.Catalog;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
@SpringBootTest
class PostControllerTests {
  @Autowired
  private PostRepository postRepository;

  @Autowired
  private MemberRepository memberRepository;

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private ObjectMapper objectMapper;

  @Autowired
  private WebApplicationContext wac;

  private MockMvc mockMvc;

  @BeforeEach
  void beforeEach() {
    mockMvc = MockMvcBuilders.webAppContextSetup(wac)
        .addFilter(new CharacterEncodingFilter("UTF-8"))
        .alwaysDo(print())
        .build();
  }

  @Test
  void create() throws Exception {
    Member member = Member.builder()
        .name("이순신")
        .nickname("나는 장군")
        .phone("010-2342-3323")
        .build();
     Member savedMember = memberRepository.save(member);


    Category category = Category.builder()
        .name("운동")
        .description("감상을 자유롭게 작성하세요")
        .build();
     Category savedCategory = categoryRepository.save(category);

    PostRequestDto postRequestDto = PostRequestDto.builder()
        .content("test02")
        .author("테스터 입니다.")
        .title("운동은 재밌다.")
        .memberId(savedMember.getId())
        .categoryId(savedCategory.getId())
        .build();

    mockMvc.perform(
        MockMvcRequestBuilders.post("/api/posts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(toJasonString(postRequestDto)))
        .andExpect(status().isCreated());
  }

  private String toJasonString(PostRequestDto postRequestDto) throws JsonProcessingException {
    return objectMapper.writeValueAsString(postRequestDto);
  }
}