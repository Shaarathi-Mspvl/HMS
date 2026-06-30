package com.example.hospitalManagementSystem.entity;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Appointment {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private LocalDate appointmentDate;
        private String prescription;
        private BigDecimal amount;
        @ManyToOne
        @JoinColumn(name = "doctorId")
        private Doctor doctor;
        @ManyToOne
        @JoinColumn(name="patientId")
        private Patient patient;

}
