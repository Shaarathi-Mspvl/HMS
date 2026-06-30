package com.example.hospitalManagementSystem.entity;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Doctor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long doctorId;
        private String doctorName;
        private String phoneNumber;
        private String specialization;
        private LocalDate availableDate;


}
