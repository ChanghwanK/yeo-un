package com.yeoun.server.module.service;

import com.yeoun.server.infra.exception.category.CategoryNotFoundException;
import com.yeoun.server.infra.exception.member.MemberNotFoundException;
import com.yeoun.server.infra.exception.post.PostNotFoundException;
import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Comment;
import com.yeoun.server.module.model.domain.Liked;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.post.PostRequestDto;
import com.yeoun.server.module.model.dto.post.PostUpdateDto;
import com.yeoun.server.module.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;
    private final CommentRepository commentRepository;
    private final ImageRepository imageRepository;

    @Transactional
    public void create(PostRequestDto postRequestDto) {
      Post post = postRequestDto.toEntity(postRequestDto);

      Member member = memberRepository.findById(postRequestDto.getMemberId())
          .orElseThrow(MemberNotFoundException::new);
      Category category = categoryRepository.findById(postRequestDto.getCategoryId())
          .orElseThrow(CategoryNotFoundException::new);
      // Liked liked = likedRepository.

      post.setCategory(category);
      post.setMember(member);
      // post.setLiked()

      /**
       * 이미지가 여러 건 올 수 있는데 Image 타입이 아니라 List<Image> 여야 하지 않을까요?
       */
      //post.addImage();

      postRepository.save(post);
    }

    /**
    * 변경 사항
    * 카테고리별 페이징 적용 기존의 findAll 삭제
    */
    public Page<Post> findAllByCategoryId(Pageable pageable, Long categoryId) {
      return postRepository.findAllByCategoryId(pageable, categoryId);
    }

  /**
   * 상세 조회시 post에 comment가 같이 내려감
   *
   * todo
   * Image 관련 구현이 필요 합니다.
   */
    public Post findById(Long postId) {
        List<Comment> comments = categoryRepository.findByPostId(postId);

        Post post = postRepository.findById(postId).orElseThrow(PostNotFoundException::new);
        post.setComments(comments);
    //    post.setImages();
        return post;
    }

  /**
   * 전체 조회를 위한 메서드 입니다.
   */
    @Transactional
    public List<Post> findAll() {
      return postRepository.findAll();
    }

    @Transactional
    public void update(PostUpdateDto updateDto, Long id) {
      Post post = postRepository.findById(id)
          .orElseThrow(PostNotFoundException::new);

      post.toUpdate(updateDto);
      postRepository.save(post);
    }

    @Transactional
    public void delete(Long id) {
        postRepository.deleteById(id);
    }
}
