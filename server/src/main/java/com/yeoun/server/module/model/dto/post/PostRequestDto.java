package com.yeoun.server.module.model.dto.post;

import com.yeoun.server.module.model.domain.Post;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class PostRequestDto {

    private String title;
    private String author;
    private String content;
    private Long categoryId;
    private Long memberId;
    private String imgUrl;

    public Post toEntity(PostRequestDto postRequestDto) {
        return Post.builder()
            .author(postRequestDto.getAuthor())
            .title(postRequestDto.getTitle())
            .content(postRequestDto.getContent())
                .imgUrl(postRequestDto.getImgUrl())
            .build();
    }
}
