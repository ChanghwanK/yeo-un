package com.yeoun.server.module.model.dto;

import com.yeoun.server.infra.exception.InvalidRequestParameterException;
import com.yeoun.server.module.model.domain.Member;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberSignUpDto {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String profileImage;
    private String phone;

    public void validateFieldsNotNull() {
        if (id == null)
            throw new InvalidRequestParameterException("Invalid memberId");
        if (email == null)
            throw new InvalidRequestParameterException("Invalid email");
        if (password == null)
            throw new InvalidRequestParameterException("Invalid password");
        if (name == null)
            throw new InvalidRequestParameterException("Invalid memberName");
        if (nickname == null)
            throw new InvalidRequestParameterException("Invalid nickname");
        if (profileImage == null)
            throw new InvalidRequestParameterException("Invalid profileImage");
        if (phone == null)
            throw new InvalidRequestParameterException("Invalid phone");
    }

    public Member toEntity() {
        return Member.builder()
                .password(password)
                .name(name)
                .nickname(nickname)
                .profileImage(profileImage)
                .phone(phone)
                .build();
    }
}
