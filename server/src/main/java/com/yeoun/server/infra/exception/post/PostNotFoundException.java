package com.yeoun.server.infra.exception.post;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public class PostNotFoundException extends RuntimeException{
  private static final String MSSAGE = "Post Entity가 존재하지 않습니다.";
  public PostNotFoundException() {
    super(MSSAGE);
  }
}
