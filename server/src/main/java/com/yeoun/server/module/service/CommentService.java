package com.yeoun.server.module.service;

import com.yeoun.server.infra.exception.comment.CommentNotFoundException;
import com.yeoun.server.module.model.domain.Comment;
import com.yeoun.server.module.model.dto.comment.CommentSaveRequest;
import com.yeoun.server.module.model.dto.comment.CommentUpdateRequest;
import com.yeoun.server.module.repository.CommentRepository;
import com.yeoun.server.module.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
public class CommentService {

  private final CommentRepository commentRepository;

  @Transactional
  public void create(Long postId, CommentSaveRequest saveRequest) {
    commentRepository.save(saveRequest.toEntity(saveRequest));
  }

  @Transactional
  public Page<Comment> findAllComment(Pageable pageable) {
    return commentRepository.findAll(pageable);
  }

  @Transactional
  public void update(Long postId, Long commentId, CommentUpdateRequest updateDto) {
    Comment comment = commentRepository.findById(commentId)
        .orElseThrow(CommentNotFoundException::new);

    comment.toUpdate(updateDto);
    commentRepository.save(comment);
  }

  @Transactional
  public void delete(Long commentId) {
    commentRepository.deleteById(commentId);
  }
}
