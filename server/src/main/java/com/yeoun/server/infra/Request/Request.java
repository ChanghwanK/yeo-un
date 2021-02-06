package com.yeoun.server.infra.Request;

import com.fasterxml.jackson.databind.JsonNode;
import com.yeoun.server.infra.exception.InvalidRequestFormatException;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Request {

    private RequestHeader header;
    private JsonNode payload;

    public void validateHeader(String expectedName) {
        validateNotNull();
        validateName(expectedName);
    }

    private void validateNotNull() {
        if (this.header == null) {
            String msg = "Null header";
            throw new InvalidRequestFormatException(msg);
        }
    }

    private void validateName(String expectedName) {
        if (!expectedName.equals(this.header.getName())) {
            String msg = "Invalid header name=" + this.header.getName();
            throw new InvalidRequestFormatException(msg);
        }
    }

    public void validatePayload() {
        if (getPayload() == null) {
            String msg = "Null payload";
            throw new InvalidRequestFormatException(msg);
        } else if (getPayload().isEmpty()) {
            String msg = "Empty payload";
            throw new InvalidRequestFormatException(msg);
        }
    }
}
