package com.ideamagix.repo;

import com.ideamagix.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository
        extends JpaRepository<Course, Long> {
}