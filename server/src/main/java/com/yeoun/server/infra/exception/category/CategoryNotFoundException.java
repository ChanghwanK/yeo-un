package com.yeoun.server.infra.exception.category;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public class CategoryNotFoundException extends RuntimeException{
  private static final String MESSAGE = "Category Entity가 존재하지 않습니다.";
  public CategoryNotFoundException() {
    super(MESSAGE);
  }
}
