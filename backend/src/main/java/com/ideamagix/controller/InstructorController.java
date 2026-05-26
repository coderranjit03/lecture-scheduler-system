package com.ideamagix.controller;

import com.ideamagix.entity.Instructor;
import com.ideamagix.service.InstructorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/instructors")
@RequiredArgsConstructor
@CrossOrigin("*")
public class InstructorController {

    private final InstructorService instructorService;

    @PostMapping
    public Instructor addInstructor(@RequestBody Instructor instructor) {
        return instructorService.addInstructor(instructor);
    }

    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructorService.getAllInstructors();
    }

    @GetMapping("/{id}")
    public Instructor getInstructorById(@PathVariable Long id) {
        return instructorService.getInstructorByID(id);
    }
}