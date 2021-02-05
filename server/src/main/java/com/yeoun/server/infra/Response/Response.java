package com.yeoun.server.infra.Response;

import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Response {

    private ResponseHeader header;
    private ObjectNode payload;

}
