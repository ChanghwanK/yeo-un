package com.yeoun.server.module.controller;

import com.yeoun.server.module.dto.PostUpdateDto;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.PostRequestDto;
import com.yeoun.server.module.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

@RequestMapping("/api/posts")
@RequiredArgsConstructor
@RestController
public class PostController {

  private PostService postService;

  @PostMapping("")
  public void create(@RequestBody PostRequestDto postRequestDto){
    postService.create(postRequestDto);
  }

  @GetMapping("")
  public Post read(Long id) {
    return postService.findById(id);
  }

  public void update(@RequestBody PostUpdateDto updateDto, Long id) {
    postService.update(updateDto, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    postService.delete(id);
  }
}
