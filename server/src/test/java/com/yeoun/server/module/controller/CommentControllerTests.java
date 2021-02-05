package com.yeoun.server.module.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.comment.CommentSaveRequest;
import com.yeoun.server.module.model.dto.post.PostRequestDto;
import com.yeoun.server.module.repository.CategoryRepository;
import com.yeoun.server.module.repository.MemberRepository;
import com.yeoun.server.module.repository.PostRepository;
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
class CommentControllerTests {
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
        .name("to-02")
        .nickname("test 작성자2")
        .phone("010-3333-4444")
        .build();
    Member savedMember = memberRepository.save(member);


    Category category = Category.builder()
        .name("미술")
        .description("미술 감상을 자유롭게 작성하세요")
        .build();
    Category savedCategory = categoryRepository.save(category);

    Post post = Post.builder()
        .content("test02")
        .author("tester02")
        .title("test 입니다 test 입니다.")
        .member(savedMember)
        .category(savedCategory)
        .build();

    Post savedPost = postRepository.save(post);

    Long id = savedPost.getId();

    CommentSaveRequest commentSaveRequest = CommentSaveRequest.builder()
        .postId(savedPost.getId())
        .content("그림이 이쁩니다.")
        .name("test02")
        .build();


    mockMvc.perform(
        MockMvcRequestBuilders.post("/api/posts/" + id + "/comments")
            .contentType(MediaType.APPLICATION_JSON)
            .content(toJasonString(commentSaveRequest)))
        .andExpect(status().isCreated());
  }

  private String toJasonString(CommentSaveRequest saveRequest) throws JsonProcessingException {
    return objectMapper.writeValueAsString(saveRequest);
  }
}