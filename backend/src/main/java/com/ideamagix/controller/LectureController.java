package com.ideamagix.controller;

import com.ideamagix.dto.LectureDto;
import com.ideamagix.entity.Course;
import com.ideamagix.entity.Instructor;
import com.ideamagix.entity.Lecture;
import com.ideamagix.repo.LectureRepository;
import com.ideamagix.service.LectureService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lectures")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LectureController {

    private final LectureService lectureService;
    private final LectureRepository lectureRepository;

    @PostMapping
    public Lecture addLecture(
            @RequestBody LectureDto dto
    ) {
        return lectureService.addLecture(dto);
    }

    @GetMapping
    public List<Lecture> getAllLectures() {
        return lectureService.getAllLectures();
    }

    @GetMapping("/instructor/{id}")
    public List<Lecture> getInstructorLectures(@PathVariable Long id) {
        return lectureService.getInstructorLectures(id);
    }

    @GetMapping("/{id}")
    public Lecture getLectureById(@PathVariable Long id) {
        return lectureService.getAllLectureByID(id);
    }

    @DeleteMapping("/{id}")
    public String deleteLecture(@PathVariable Long id) {
        lectureService.deleteLecture(id);
        return "Lecture has been deleted";
    }


}