package com.hr.management.system.service;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.catalina.WebResourceRoot.ArchiveIndexStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hr.management.system.entity.Employee;
import com.hr.management.system.entity.Leave;
import com.hr.management.system.repository.EmployeeRepository;
import com.hr.management.system.repository.LeaveRepository;

import jakarta.transaction.Transactional;

@Service
public class LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public Leave saveLeave(Leave leave) {
        if (leave.getEmployeeid() == null) {
            throw new IllegalArgumentException("Employee ID is required");
        }

        Employee employee = employeeRepository.findById(leave.getEmployeeid())
                .orElseThrow(() -> new RuntimeException("Employee with ID " + leave.getEmployeeid() + " not found"));

        leave.setEmployee(employee);
        return leaveRepository.save(leave);
    }

    public List<Leave> saveAllLeave(List<Leave> leaveList) {
        return leaveRepository.saveAll(leaveList);
    }

    public Leave getLeaveById(Long id) {
        return leaveRepository.findById(id).orElseThrow();
    }

    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

    public Leave updateleaveById(Leave leave, Long id) {
        Leave existingLeave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave with ID " + id + " not found"));

        existingLeave.setType(leave.getType());
        existingLeave.setFromDate(leave.getFromDate());
        existingLeave.setToDate(leave.getToDate());
        existingLeave.setDays(leave.getDays());
        existingLeave.setReason(leave.getReason());
        existingLeave.setStatus(leave.getStatus());
        existingLeave.setEmployeename(leave.getEmployeename());

        return leaveRepository.save(existingLeave);
    }

    public void deleteById(Long id) {
        leaveRepository.deleteById(id);
    }

    public void deleteAll() {
        leaveRepository.deleteAll();
    }
}