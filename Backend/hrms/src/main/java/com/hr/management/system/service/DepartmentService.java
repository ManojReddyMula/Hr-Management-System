package com.hr.management.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.hr.management.system.entity.Department;
import com.hr.management.system.repository.DepartmentRepository;

@Service
public class DepartmentService {
	
	@Autowired
	DepartmentRepository departmentRepository;

	public  Department saveDepartment(Department department) {

		return departmentRepository.save(department);
	}
	
	public List<Department> saveAllDepartment(List<Department> departmentList) {

		return departmentRepository.saveAll(departmentList);
	}

	public Department getDepartmentById(Long id) {

		return departmentRepository.findById(id).orElse(null);
	}

	public  List<Department> getAllDepartment( ) {
		
		return departmentRepository.findAll();
	}

	public Department updateDepartment(@RequestBody Department department, @PathVariable Long id) {
	    Department existing = departmentRepository.findById(id)
	           
	    	.orElseThrow(() -> new RuntimeException("Department not found with id: " + id));
	      
	existing.setId(department.getid());
	existing.setDepartmentname(department.getDepartmentname());
	existing.setEmployeecount(department.getEmployeecount());
	existing.setLocation(department.getLocation());
	existing.setManager(department.getManager());
	existing.setEmployee(department.getEmployee());
	
	 return departmentRepository.save(existing);
	    	   
	}
	public void deleteAll() {
		departmentRepository.deleteAll();	
	}
	public void deleteDepartmentById(Long id) {
		departmentRepository.deleteById(id);
		
	}


}
