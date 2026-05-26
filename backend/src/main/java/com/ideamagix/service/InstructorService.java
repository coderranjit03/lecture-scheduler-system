package com.ideamagix.service;

import com.ideamagix.entity.Instructor;
import com.ideamagix.repo.InstructorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InstructorService {

    private final InstructorRepository instructorRepository;

    public List<Instructor> getAllInstructors() {
        return instructorRepository.findAll();
    }

    public Instructor addInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    public Instructor getInstructorByID(Long id) {
        return instructorRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Instructor not found"));
    }
}