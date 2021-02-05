package com.yeoun.server.module.model.dto;

import com.yeoun.server.module.model.domain.Liked;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LikeDto {
  private Long memberId;
  private Long postId;

  public Liked toEntity(Member member, Post post) {
    return Liked.builder()
        .member(member)
        .post(post)
        .build();
  }
}
