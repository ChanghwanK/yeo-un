package com.yeoun.server.module.service;

import com.yeoun.server.infra.exception.category.CategoryNotFoundException;
import com.yeoun.server.infra.exception.member.MemberNotFoundException;
import com.yeoun.server.infra.exception.post.PostNotFoundException;
import com.yeoun.server.module.model.domain.Image;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.dto.PostUpdateDto;
import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.PostRequestDto;
import com.yeoun.server.module.repository.CategoryRepository;
import com.yeoun.server.module.repository.ImageRepository;
import com.yeoun.server.module.repository.MemberRepository;
import com.yeoun.server.module.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;
    private final ImageRepository imageRepository;

    public void create(PostRequestDto postRequestDto) {

      Category category = categoryRepository.findById(postRequestDto.getCategoryId())
          .orElseThrow(CategoryNotFoundException::new);

      Member member = memberRepository.findById(postRequestDto.getMemberId())
          .orElseThrow(MemberNotFoundException::new);

      /**
       * 이미지 관련해서 공부를 잠시 해봤는데 이 방법이 아닌거 같아서 일단 주석처리 합니다!!
       */
      //Image image = imageRepository.findById(postRequestDto.getImageId()).orElse(null);

      postRepository.save(postRequestDto.toEntity(postRequestDto, category, member));
    }

    public Page<Post> findAll(Pageable pageable) {
      return postRepository.findAll(pageable);
    }

    public Post findById(Long postId) {
        return postRepository
             .findById(postId)
             .orElseThrow(PostNotFoundException::new);
    }

    public void update(PostUpdateDto updateDto, Long id) {
      Post post = postRepository.findById(id)
          .orElseThrow(PostNotFoundException::new);

      post.update(updateDto);
      postRepository.save(post);
    }


    public void delete(Long id) {
        postRepository.deleteById(id);
    }
}
