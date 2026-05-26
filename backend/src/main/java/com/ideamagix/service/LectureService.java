package com.ideamagix.service;

import com.ideamagix.dto.LectureDto;
import com.ideamagix.entity.Course;
import com.ideamagix.entity.Instructor;
import com.ideamagix.entity.Lecture;
import com.ideamagix.repo.CourseRepository;
import com.ideamagix.repo.InstructorRepository;
import com.ideamagix.repo.LectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LectureService {

    private final LectureRepository lectureRepository;
    private final CourseRepository courseRepository;
    private final InstructorRepository instructorRepository;


    public Lecture addLecture(LectureDto dto) {

        boolean exists = lectureRepository
                .existsByInstructorIdAndLectureDate(
                        dto.getInstructorId(),
                        dto.getLectureDate()
                );

        if (exists) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Instructor already assigned on this date"
            );
        }

        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Course not found"));

        Instructor instructor = instructorRepository.findById(dto.getInstructorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Instructor not found"));

        Lecture lecture = new Lecture();

        lecture.setTopic(dto.getTopic());
        lecture.setLectureDate(dto.getLectureDate());
        lecture.setCourse(course);
        lecture.setInstructor(instructor);

        return lectureRepository.save(lecture);
    }

    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }

    public List<Lecture> getInstructorLectures(Long id) {
        return lectureRepository.findByInstructorId(id);
    }

    public Lecture getAllLectureByID(Long id) {
        return lectureRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Lecture not found"
        ));
    }

    public void deleteLecture(Long id) {

        Lecture lecture = lectureRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Lecture not found"
                        )
                );

        lectureRepository.delete(lecture);
    }

}