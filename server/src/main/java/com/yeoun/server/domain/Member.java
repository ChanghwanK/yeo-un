package com.yeoun.server.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String password;
    private String name;
    private String nickname;
    private String profileImage;
    private String phone;

    @OneToMany(mappedBy = "member")
    private List<Liked> likedList = new ArrayList<>();

    @Builder
    public Member(String password, String name,
                String nickname, String profileImage,
                String phone) {
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.phone = phone;
    }
}
