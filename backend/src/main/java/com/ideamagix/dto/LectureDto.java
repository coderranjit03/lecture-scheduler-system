package com.ideamagix.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;

@Data
public class LectureDto {

    private String topic;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate lectureDate;

    private Long courseId;

    private Long instructorId;
}