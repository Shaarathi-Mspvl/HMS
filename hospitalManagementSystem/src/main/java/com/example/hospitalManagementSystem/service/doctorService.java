package com.example.hospitalManagementSystem.service;

import com.example.hospitalManagementSystem.Repository.doctorRepository;
import com.example.hospitalManagementSystem.Repository.patientRepository;
import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.entity.Patient;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class doctorService {
    private final doctorRepository DRepository;

    public doctorService(doctorRepository DRepository){
        this.DRepository=DRepository;
    }
    public List<Doctor> getAllDoctors() {

        return DRepository.findAll();
    }

    public Doctor getDoctorById(Long id) {

        return DRepository.findById(id).orElse(null);
    }

    public Doctor addDoctor(Doctor doctor) {

        return DRepository.save(doctor);
    }

    public void deleteDoctorById(Long id) {

        DRepository.deleteById(id);
    }
}