package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public interface ImageRepository extends JpaRepository<Image, Long> {

}
