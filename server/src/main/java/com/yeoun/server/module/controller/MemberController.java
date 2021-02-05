package com.yeoun.server.module.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.yeoun.server.infra.Request.Request;
import com.yeoun.server.module.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/member")
@RequiredArgsConstructor
@RestController
public class MemberController {

    private final MemberService memberService;

    @PutMapping(value = "/sign-up", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> signUp(@RequestBody Request request) throws JsonProcessingException {

        log.info("[Request] member-sign-up");
        request.validateHeader("SignUpRequest");
        request.validatePayload();

        String signUpResult = memberService.signUp(request.getPayload());
        return new ResponseEntity<>(signUpResult, HttpStatus.OK);
    }

    @PutMapping(value = "/sign-in", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> signInSubmit(@RequestBody Request request) {

        log.info("[Request] member-sign-in");
        request.validateHeader("SignInRequest");
        request.validatePayload();

        String signInResult = memberService.signIn(request.getPayload());
        return new ResponseEntity<>(signInResult, HttpStatus.OK);
    }

    @PutMapping(value = "/sign-out", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> signOut(@RequestBody Request request) {

        log.info("[Request] member-sign-out");
        request.validateHeader("SignOutRequest");

        String signOutResult = memberService.signOut(request.getHeader().getMemberId());
        return new ResponseEntity<>(signOutResult, HttpStatus.OK);
    }
}
