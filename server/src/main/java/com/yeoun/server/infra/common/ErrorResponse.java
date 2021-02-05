package com.yeoun.server.infra.common;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ErrorResponse {
  private int errorCode;
  private String message;

  public static ErrorResponse of (HttpStatus httpStatus, String message){
    return new ErrorResponse(httpStatus.value(), message);
  }


}
