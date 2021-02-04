package com.yeoun.server.module.service;

import com.yeoun.server.infra.exception.post.PostNotFoundException;
import com.yeoun.server.module.dto.PostUpdateDto;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.PostRequestDto;
import com.yeoun.server.module.repository.PostRepository;
import java.util.Optional;
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

    public Post findById(Long postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public Page<Post> findAll(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    public void create(PostRequestDto postRequestDto) {
      postRepository.save(postRequestDto.toEntity(postRequestDto)) ;
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
