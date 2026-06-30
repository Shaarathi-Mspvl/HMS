package com.example.hospitalManagementSystem.service;

import com.example.hospitalManagementSystem.Repository.appointmentRepository;
import com.example.hospitalManagementSystem.Repository.doctorRepository;
import com.example.hospitalManagementSystem.Repository.patientRepository;
import com.example.hospitalManagementSystem.entity.Appointment;
import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.entity.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class patientService {
    private final patientRepository PRepository;

    public patientService(patientRepository PRepository){

        this.PRepository=PRepository;

    }
    public List<Patient> getAllPatients() {

        return PRepository.findAll();
    }


    public Patient addPatient(Patient patient) {

        return PRepository.save(patient);
    }

    public void deletePatientById(Long id) {

        PRepository.deleteById(id);
    }
}