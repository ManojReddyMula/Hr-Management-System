
 package com.hr.management.system.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hr.management.system.entity.Department;
import com.hr.management.system.entity.Employee;
import com.hr.management.system.repository.DepartmentRepository;
import com.hr.management.system.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeService {

	
	@Autowired
	EmployeeRepository employeeRepository;
	@Autowired
	DepartmentRepository departmentRepository;

    // Save a single employee
	   public Employee saveEmployee(Employee employee) {
	        // Validate and set the Department
	        if (employee.getDepartment() != null && employee.getDepartment().getid() != null) {
	            Department department = departmentRepository.findById(employee.getDepartment().getid())
	                    .orElseThrow(() -> new RuntimeException("Department with ID " + employee.getDepartment().getid() + " not found"));
	            employee.setDepartment(department); // This sets departmentname via Employee's setDepartment
	        } else {
	            throw new RuntimeException("Department ID is required");
	        }

	        return employeeRepository.save(employee);
	    }
	

    // Save multiple employees
  public List<Employee> saveAllEmployees(List<Employee> employee) {
        
    	List<Employee> employees=saveAllEmployees(employee);
    	
        return employeeRepository.saveAll(employees);
    }

    // Get employee by ID
    public Employee getEmployeeById(Long id) {
        return  employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee with ID " + id + " not found"));
    }

    // Get all employees
    
    public List<Employee> getAllEmployees() {
		
		return  employeeRepository.findAll();
	}
   

    // Update employee
    public Employee updateEmployee(Long id, Employee employee) {
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee with ID " + id + " not found"));

        existingEmployee.setEmployeename(employee.getEmployeename());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhoneNumber(employee.getPhoneNumber());
        existingEmployee.setAddress(employee.getAddress());
        existingEmployee.setPosition(employee.getPosition());
        existingEmployee.setSalary(employee.getSalary());
        existingEmployee.setStatus(employee.getStatus());
        existingEmployee.setGender(employee.getGender());
        existingEmployee.setJoinDate(employee.getJoinDate());
        existingEmployee.setBirthDate(employee.getBirthDate());
        existingEmployee.setDepartmentname(employee.getDepartmentname());

        if (employee.getDepartment() != null && employee.getDepartment().getid() != null) {
            Department department = departmentRepository.findById(employee.getDepartment().getid())
                    .orElseThrow(() -> new RuntimeException("Department with ID " + employee.getDepartment().getid() + " not found"));
            existingEmployee.setDepartment(department); // Synchronizes departmentname
        } else {
            throw new RuntimeException("Department ID is required");
        }

        return employeeRepository.save(existingEmployee);
    }

    // Delete employee by ID
    public void deleteEmployeeById(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }

    // Delete all employees
    public void deleteAll() {
    	employeeRepository.deleteAll();
        
    }


	

	

        }

