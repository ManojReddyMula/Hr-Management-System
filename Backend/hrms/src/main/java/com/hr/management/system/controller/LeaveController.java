package com.hr.management.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hr.management.system.entity.Employee;
import com.hr.management.system.entity.Leave;
import com.hr.management.system.repository.LeaveRepository;
import com.hr.management.system.service.LeaveService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class LeaveController {
	
@Autowired
LeaveService leaveService;

@PostMapping("/leave/save")
public ResponseEntity<Leave> saveLeave(@RequestBody Leave leave) {
    Leave savedleave = leaveService.saveLeave(leave);
    return ResponseEntity.ok(savedleave);
}

@PostMapping("/leave/saveall")
public ResponseEntity <List<Leave>> saveAllLeave(@RequestBody List<Leave> leavelist){
	List<Leave> savedall=leaveService. saveAllLeave(leavelist);
	return ResponseEntity.ok(savedall);
}
	 
	 @GetMapping("/leave/{id}")
	 public ResponseEntity<Leave> getLeaveById(@PathVariable Long id ){
	return	 ResponseEntity.ok(leaveService.getLeaveById(id));
		 
	 }
	 @GetMapping("/leave/all")
	    public ResponseEntity <List<Leave>> getAllLeaves() {
	        return ResponseEntity.ok(leaveService.getAllLeaves());
	    }
	 
	 @PutMapping("leave/{id}")
	 public  ResponseEntity<Leave> updateleaveById(@RequestBody Leave leave, @PathVariable Long id ){
		
		 Leave existingleave=leaveService.updateleaveById (leave ,id);
		 return ResponseEntity.ok(existingleave);
		 
	 }
	 
	 @DeleteMapping("/leave/{id}")
	 public  ResponseEntity<String > deleteById(@PathVariable Long id){
	               leaveService.deleteById(id);
		 return ResponseEntity.ok("Leave object deleted id"+id);
	 }
	 @DeleteMapping("/leave/all")
	 public ResponseEntity<String> deleteAll(){
		 leaveService.deleteAll();
		 return ResponseEntity.ok("deleted all l eaves  ");
	 }
}

