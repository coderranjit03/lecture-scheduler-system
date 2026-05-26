package com.ideamagix.repo;

import com.ideamagix.entity.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructorRepository
        extends JpaRepository<Instructor, Long> {

    Instructor findByEmail(String email);
}