package com.hr.management.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr.management.system.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>{
	

	
	
}
