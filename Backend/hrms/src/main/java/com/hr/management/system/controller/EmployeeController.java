package com.hr.management.system.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.AbstractRepositoryConfigurationSourceSupport;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.service.annotation.DeleteExchange;


import com.hr.management.system.entity.Employee;
import com.hr.management.system.service.EmployeeService;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/api") 
@CrossOrigin(origins = "*")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;

	@PostMapping("/employee/save")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee){
		  Employee savedemployee= employeeService.saveEmployee(employee);
		 return  ResponseEntity.ok(savedemployee);
	}
	
	@PostMapping("/employee/saveall")
	public ResponseEntity <List<Employee>> saveAllEmployee(@RequestBody   List<Employee> employeeList ){
		List<Employee> savedall=employeeService.saveAllEmployees(employeeList);
		return ResponseEntity.ok(savedall);
	}
	
	@GetMapping("/employee/{id}")
	public  ResponseEntity<Employee> getEmployeeById(@PathVariable ("id")  Long id){
		return ResponseEntity.ok(employeeService.getEmployeeById(id));
	}
	
	@GetMapping("/employee/all")
	public ResponseEntity <List<Employee>> getAllEmployees(){
		return ResponseEntity.ok(employeeService.getAllEmployees());
	}
		
		@PutMapping("employee/{id}")
		public ResponseEntity <Employee> updateEmployeeById(@RequestBody Employee employee,@PathVariable Long id){
			Employee update=employeeService.updateEmployee(id,employee);
			return ResponseEntity.ok(update);
			
	
		}
		
		@DeleteMapping("/employee/{id}")
		public ResponseEntity<String> deleteEmployeeById( @PathVariable Long id) {
			employeeService.deleteEmployeeById(id);
		return ResponseEntity.ok("Employee deleteed Id no "+id);
		}
		
		@DeleteMapping("/employee/deleteall")
		public  ResponseEntity <String> deleteAll(){
			employeeService.deleteAll();
			return ResponseEntity.ok("deleted all Employees");
			
		} 
	}

