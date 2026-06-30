package com.example.hospitalManagementSystem.Repository;

import com.example.hospitalManagementSystem.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface appointmentRepository extends JpaRepository<Appointment,Long> {
  
}
