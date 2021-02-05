package com.yeoun.server.module.model.dto;

import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.Post;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostRequestDto {

    private String title;
    private String author;
    private String content;
    private Long categoryId;
    private Long memberId;

    public Post toEntity(PostRequestDto postRequestDto, Category category, Member member) {
        return Post.builder()
            .title(postRequestDto.getTitle())
            .content(postRequestDto.getContent())
            .category(category)
            .member(member)
            .build();
    }
}
