package com.example.hospitalManagementSystem.Repository;

import com.example.hospitalManagementSystem.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;


public interface patientRepository extends JpaRepository<Patient,Long> {
}
