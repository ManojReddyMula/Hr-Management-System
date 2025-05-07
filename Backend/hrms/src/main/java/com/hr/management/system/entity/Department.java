package com.hr.management.system.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="department")
public class Department {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_id")
    private Long id;
    private String departmentname;
    private String manager;
    private int employeecount;
    private String location;
    
   
    @OneToMany(mappedBy = "department", cascade = CascadeType.PERSIST)
  
    @JsonIgnore
    private List<Employee> employee;
    
    public Department() {
    }

    public Department(Long id, String departmentname, String manager, int employeecount, String location,
            List<Employee> employee) {
        this.id = id;
        this.departmentname = departmentname;
        this.manager = manager;
        this.employeecount = employeecount;
        this.location = location;
        this.employee = employee;
    }

    public Long getid() {
        return id;
    }

    public void setId(Long id) {
        this.id =id;
    }

    public String getDepartmentname() {
        return departmentname;
    }

    public void setDepartmentname(String departmentname) {
        this.departmentname = departmentname;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public int getEmployeecount() {
        return employeecount;
    }

    public void setEmployeecount(int employeecount) {
        this.employeecount = employeecount;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Employee> getEmployee() {
        return employee;
    }

    public void setEmployee(List<Employee> employee) {
        this.employee = employee;
    }
}