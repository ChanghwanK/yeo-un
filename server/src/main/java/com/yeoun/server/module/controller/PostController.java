package com.yeoun.server.module.controller;

import com.yeoun.server.module.model.dto.post.PostUpdateDto;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.post.PostRequestDto;
import com.yeoun.server.module.service.PostService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

  private final PostService postService;

  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("")
  public void create(@RequestBody PostRequestDto postRequestDto){
    postService.create(postRequestDto);
  }

  // Page 타입으로 변경
  @GetMapping("/{category-id}")
  public Page<Post> read(@PathVariable(name = "category-id") Long categoryId,
                         @PageableDefault Pageable pageable) {
    return postService.findAllByCategoryId(pageable, categoryId);
  }

  /**
   * 전체 조회 용
   */
  @GetMapping("")
  public List<Post> readAll() {
    return postService.findAll();
  }

  /**
   * 상세 (단건 조회 용)
   */
  @GetMapping("/{id}")
  public Post read(@PathVariable Long id) {
    return postService.findById(id);
  }

  @PutMapping("/{id}")
  public void update(@RequestBody PostUpdateDto updateDto, Long id) {
    postService.update(updateDto, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    postService.delete(id);
  }

}
