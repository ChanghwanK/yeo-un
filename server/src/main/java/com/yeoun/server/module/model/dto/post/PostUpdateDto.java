package com.yeoun.server.module.model.dto.post;

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
public class PostUpdateDto {

  private String content;
  private Long categoryId;

}
