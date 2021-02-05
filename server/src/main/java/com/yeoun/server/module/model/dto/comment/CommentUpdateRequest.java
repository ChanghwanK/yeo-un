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
public class CommentUpdateRequest {
  private String content;
  private int likCount;

  public Comment toEntity(CommentUpdateRequest dto) {
    return Comment.builder()
        .content(dto.getContent())
        .likeCount(dto.getLikCount())
        .build();
  }
}
