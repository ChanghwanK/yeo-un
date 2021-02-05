package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
