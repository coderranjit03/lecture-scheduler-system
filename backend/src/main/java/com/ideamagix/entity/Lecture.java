package com.ideamagix.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "lectures")
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;

    private LocalDate lectureDate;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonBackReference
    private Course course;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private Instructor instructor;
}