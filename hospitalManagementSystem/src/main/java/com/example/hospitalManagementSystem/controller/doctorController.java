package com.example.hospitalManagementSystem.controller;

import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.service.doctorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")


public class doctorController {
    private final doctorService dService;

    public doctorController(doctorService dService){

        this.dService=dService;
    }
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){

        return dService.addDoctor(doctor);
    }
    @GetMapping
    public List<Doctor> getAllDoctors() {

        return dService.getAllDoctors();
    }
    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id){
        return dService.getDoctorById(id);
    }
    @DeleteMapping("/{id}")
    public String deleteDoctorById(@PathVariable Long id){
        dService.deleteDoctorById(id);
        return "Doctor has been deleted";
    }

}
