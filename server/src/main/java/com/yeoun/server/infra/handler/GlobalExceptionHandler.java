package com.yeoun.server.infra.handler;

import com.yeoun.server.infra.common.ErrorResponse;
import com.yeoun.server.infra.exception.category.CategoryNotFoundException;
import com.yeoun.server.infra.exception.member.MemberNotFoundException;
import com.yeoun.server.infra.exception.post.PostNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.CannotCreateTransactionException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(CategoryNotFoundException.class)
  public ErrorResponse handleCategoryNotFoundException(CategoryNotFoundException ex) {
    return ErrorResponse.of(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(PostNotFoundException.class)
  public ErrorResponse handlePostNotFoundException(PostNotFoundException ex) {
    return ErrorResponse.of(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MemberNotFoundException.class)
  public ErrorResponse handleMemberNotFoundException(MemberNotFoundException ex) {
    return ErrorResponse.of(HttpStatus.BAD_REQUEST, ex.getMessage());
  }
}
