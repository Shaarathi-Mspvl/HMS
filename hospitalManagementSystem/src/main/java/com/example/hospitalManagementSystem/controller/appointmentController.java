package com.example.hospitalManagementSystem.controller;

import com.example.hospitalManagementSystem.entity.Appointment;
import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.service.appointmentService;
import com.example.hospitalManagementSystem.service.doctorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/appointment")

public class appointmentController {
    private final appointmentService AService;

    public appointmentController(appointmentService AService){

        this.AService=AService;
    }

    @PostMapping("/book")
    public Appointment addAppointment(@RequestParam Long doctorId,@RequestParam Long patientId,@RequestBody Appointment appointment){

        return AService.addAppointment(doctorId,patientId,appointment);
    }
    @GetMapping
    public List<Appointment> getAllAppointments() {

        return AService.getAllAppointments();
    }

    @DeleteMapping("/{id}")
    public String deleteAppointmentById(@PathVariable Long id){
        AService.deleteAppointmentById(id);
        return "Appointment has been deleted";
    }

}
