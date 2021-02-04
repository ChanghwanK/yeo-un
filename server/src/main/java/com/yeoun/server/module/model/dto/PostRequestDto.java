package com.yeoun.server.module.model.dto;

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



    /**
     *  todo
     *  post 등록시 카테고리 객체 생성을 어떻게 해야 할까?
     *  - 요청 dto 에 category 가 존재 해야 함
     *  - 근데 여기서 어떻게 정보를 가져와야 할까?
     */
    public Post toEntity(PostRequestDto postRequestDto) {
        return Post.builder()
            .title(postRequestDto.getTitle())
            .content(postRequestDto.getContent())
            //.category(categoryRepository.getOne(postRequestDto.getCategoryId()))
            .build();
    }

}
