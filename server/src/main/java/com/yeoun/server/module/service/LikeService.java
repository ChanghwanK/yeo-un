package com.yeoun.server.module.service;

import com.yeoun.server.module.model.domain.Liked;
import com.yeoun.server.module.model.domain.Member;
import com.yeoun.server.module.model.domain.Post;
import com.yeoun.server.module.model.dto.LikeDto;
import com.yeoun.server.module.repository.LikeRepository;
import com.yeoun.server.module.repository.MemberRepository;
import com.yeoun.server.module.repository.PostRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
@RequiredArgsConstructor
@Service
public class LikeService {

  private final LikeRepository likeRepository;
  private final MemberRepository memberRepository;
  private final PostRepository postRepository;

  @Transactional
  public void createLike(LikeDto dto) {

    Member member = memberRepository.getOne(dto.getMemberId());
    Post post = postRepository.getOne(dto.getPostId());

    likeRepository.save(dto.toEntity(member, post));
  }

  @Transactional
  public List<Liked> findAll(Long memberId) {
    return likeRepository.findLikedByMemberId(memberId);
  }
}
