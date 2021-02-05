package com.yeoun.server.module.model.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MemberType {

    USER("ROLE_USER", "일반 사용자"),
    ARTIST("ROLE_ARTIST", "예술가");

    private final String key;
    private final String title;
}
