package com.yeoun.server.module.dto;

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

  /**
   * todo
   * - category 변경도 가능해야 해야 하는데 카테고리 ID를 어떻게 가져올까?
   * - 매개 값으로 받으면 될까??
   */


}
