package com.yeoun.server.infra.Response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResponseHeader {

    private String name;
    private String message;

}
