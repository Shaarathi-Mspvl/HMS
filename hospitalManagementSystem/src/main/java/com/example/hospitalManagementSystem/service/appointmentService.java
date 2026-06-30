package com.example.hospitalManagementSystem.service;

import com.example.hospitalManagementSystem.Repository.appointmentRepository;
import com.example.hospitalManagementSystem.Repository.doctorRepository;
import com.example.hospitalManagementSystem.Repository.patientRepository;
import com.example.hospitalManagementSystem.entity.Appointment;
import com.example.hospitalManagementSystem.entity.Doctor;
import com.example.hospitalManagementSystem.entity.Patient;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class appointmentService {
    private final appointmentRepository ARepository;
    private final doctorRepository DRepository;
    private final patientRepository PRepository;
    public appointmentService(appointmentRepository ARepository,doctorRepository DRepository,patientRepository PRepository){
        this.ARepository=ARepository;
        this.DRepository=DRepository;
        this.PRepository=PRepository;

    }

    public List<Appointment> getAllAppointments() {

        return ARepository.findAll();
    }

    public Appointment addAppointment(Long doctorId,Long patientId,Appointment appointment) {
        Patient patient=PRepository.findById(patientId).orElse(null);
        Doctor doctor=DRepository.findById(doctorId).orElse(null);
        appointment.setAppointmentDate(appointment.getAppointmentDate());
        appointment.setPrescription(appointment.getPrescription());
        appointment.setAmount(appointment.getAmount());
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        return ARepository.save(appointment);
    }

    public void deleteAppointmentById(Long id) {

        ARepository.deleteById(id);
    }


}