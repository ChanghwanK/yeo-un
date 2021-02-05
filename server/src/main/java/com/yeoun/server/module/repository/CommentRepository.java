package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {

}
