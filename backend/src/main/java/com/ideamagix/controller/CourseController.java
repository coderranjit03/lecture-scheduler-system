package com.ideamagix.controller;

import com.ideamagix.entity.Course;
import com.ideamagix.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCourseById(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return "Course Deleted Successfully";
    }
}