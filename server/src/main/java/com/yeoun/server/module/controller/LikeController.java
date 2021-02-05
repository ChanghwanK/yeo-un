package com.yeoun.server.module.controller;

import com.yeoun.server.module.model.domain.Liked;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.LikeDto;
import com.yeoun.server.module.service.LikeService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

@RequestMapping("/api/like")
@RequiredArgsConstructor
@RestController
public class LikeController {

  private final LikeService likeService;

  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("")
  public void createLike(@RequestBody LikeDto dto) {
    likeService.createLike(dto);
  }

  /**
   * 내가 좋아요한 게시글 조회를 위한 메서드
   * - 페이징 x
   */
  @GetMapping("/{member-id}")
  public List<Liked> findAll(@PathVariable(name = "member-id") Long memberId) {
    return likeService.findAll(memberId);
  }
}
