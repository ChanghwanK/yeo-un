package com.yeoun.server.module.model.dto.member;

import com.yeoun.server.infra.exception.InvalidRequestParameterException;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.MemberType;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class MemberSignUpDto {

    private Long id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String profileImage;
    private String nickname;
    private MemberType memberType;

    public void validateFieldsNotNull() {
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

    public String toString() {
        return "id: " + id +
                "email: " + email +
                "name: " + name +
                "nickname: " + nickname +
                "phone: " + phone;
    }

    public Member toEntity() {
        return Member.builder()
                .password(password)
                .email(email)
                .name(name)
                .nickname(nickname)
                .profileImage(profileImage)
                .phone(phone)
                .memberType(memberType)
                .build();
    }
}
