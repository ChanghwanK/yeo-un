package com.yeoun.server.infra.exception.comment;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public class CommentNotFoundException extends RuntimeException{
  private static final String MESSAGE = "해당 Comment가 존재하지 않습니다.";
  public CommentNotFoundException() {
    super(MESSAGE);
  }
}
