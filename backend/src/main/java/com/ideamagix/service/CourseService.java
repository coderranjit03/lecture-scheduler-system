package com.ideamagix.service;

import com.ideamagix.entity.Course;
import com.ideamagix.repo.CourseRepository;
import com.ideamagix.repo.LectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final LectureRepository lectureRepository;

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Course not found"));
    }

    public void deleteCourse(Long id) {

        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // DELETE RELATED LECTURES FIRST
        lectureRepository.deleteById(id);

        // THEN DELETE COURSE
        courseRepository.delete(course);
    }
}