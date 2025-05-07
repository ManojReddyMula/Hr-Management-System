package com.hr.management.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.management.system.entity.Department;
import com.hr.management.system.entity.Employee;
import com.hr.management.system.service.DepartmentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")

public class DepartmentController {
	
	@Autowired
	DepartmentService departmentService;
	
	@PostMapping("/department/save")
	public ResponseEntity<Department> saveDepartment(@RequestBody Department department){
		Department saveddepartment= departmentService.saveDepartment(department);
		return ResponseEntity.ok(saveddepartment);
	}
	
	@PostMapping("/department/saveall")
	public ResponseEntity <List<Department>> saveAllDepartment(@RequestBody List<Department> departmentList){
		
	List<Department> savedepartments=departmentService.saveAllDepartment(departmentList);
	return ResponseEntity.ok(savedepartments);
	}
	
	@GetMapping("/department/{id}")
	public  ResponseEntity<Department> getDepartmentBId(@PathVariable Long id ){
	return ResponseEntity.ok(departmentService. getDepartmentById (id));     
		
	}
	@GetMapping("/department/all")
	public ResponseEntity <List<Department>> getAllDepartment(){
		return ResponseEntity.ok(departmentService.getAllDepartment());
	}

	@PutMapping("/department/{id}")
	public ResponseEntity<Department> updateDepartment(@RequestBody Department department, @PathVariable Long id ){
		
		Department updated =departmentService.updateDepartment(department,id);
	 return	ResponseEntity.ok(updated);
		}

	@DeleteMapping("/department/{id}")
	public String deleteDepartmentById(@PathVariable Long id) {
	    departmentService.deleteDepartmentById(id);
	    return "Deleted department with id: " + id;
	}

	
	@DeleteMapping("/department/all")
	public String deleteAll() {
	departmentService.deleteAll();
	return "deleted all departments";
	
	}
}	

	