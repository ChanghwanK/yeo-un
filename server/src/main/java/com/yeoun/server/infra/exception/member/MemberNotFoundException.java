package com.yeoun.server.infra.exception.member;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

public class MemberNotFoundException extends RuntimeException{
  private static final String MESSAGE = "Member Entity가 존재하지 않습니다.";
  public MemberNotFoundException() {
    super(MESSAGE);
  }
}
