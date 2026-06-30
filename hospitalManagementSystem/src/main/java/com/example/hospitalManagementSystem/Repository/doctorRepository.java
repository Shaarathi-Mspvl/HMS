package com.example.hospitalManagementSystem.Repository;

import com.example.hospitalManagementSystem.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface doctorRepository extends JpaRepository<Doctor,Long> {
}
