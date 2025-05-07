package com.hr.management.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hr.management.system.entity.Project;
import com.hr.management.system.service.ProjectService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProjectController {
    
    @Autowired
    ProjectService projectService;

    @PostMapping("/project/save")
    public ResponseEntity<Project> saveProject(@RequestBody Project project) {
        Project savedProject = projectService.saveProject(project);
        return ResponseEntity.ok(savedProject);
    }
    
    
    @PostMapping("/project/saveall")
    public ResponseEntity <List<Project>> saveAllProject(@RequestBody List<Project> projectList ){
    	List<Project> savedall= projectService.saveAllProject(projectList);
    	return ResponseEntity.ok(savedall);
    }

    @GetMapping("/project/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }
    @GetMapping("/project/all")
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }
    @PutMapping("/project/{id}")
    public ResponseEntity<Project> updateProjectById(@RequestBody Project project, @PathVariable Long id) {
        Project existingProject = projectService.updateProjectById(id,project);
        return ResponseEntity.ok(existingProject);
        
    }

    @DeleteMapping("/project/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        projectService.deleteById(id);
        return ResponseEntity.ok("Project object deleted with id: " + id);
    }

    @DeleteMapping("/project/All")
    public ResponseEntity<String> deleteAllProjects() {
        projectService.deleteAll();
        return ResponseEntity.ok("Deleted all projects");
    }
}