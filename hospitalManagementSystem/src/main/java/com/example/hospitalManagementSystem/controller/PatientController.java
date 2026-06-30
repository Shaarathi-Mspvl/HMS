package com.example.hospitalManagementSystem.controller;

import com.example.hospitalManagementSystem.entity.Appointment;
import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.entity.Patient;
import com.example.hospitalManagementSystem.service.patientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/patient")
public class PatientController {
    private final patientService pService;

    public PatientController(patientService pService){

        this.pService=pService;
    }
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient){

        return pService.addPatient(patient);
    }
    @GetMapping
    public List<Patient> getAllPatients() {

        return pService.getAllPatients();
    }

    @DeleteMapping("/{id}")
    public String deletePatientById(@PathVariable Long id){
        pService.deletePatientById(id);
        return "Patient has been deleted";
    }

}