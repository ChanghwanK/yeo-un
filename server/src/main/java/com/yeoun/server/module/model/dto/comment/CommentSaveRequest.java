package com.yeoun.server.module.model.dto.comment;

import com.yeoun.server.module.model.domain.Comment;
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
public class CommentSaveRequest {

  private Long postId;
  private String content;
  private String name;

  /**
   * todo
   * 댓글에 이름 혹은 닉네임이 없는데 추가 해야 하는지?
   */
  public Comment toEntity(CommentSaveRequest dto) {
    return Comment.builder()
        .content(dto.getContent())
        .likeCount(0)
        .build();
  }
}
