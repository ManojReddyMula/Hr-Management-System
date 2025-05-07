package com.hr.management.system.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.WebResourceRoot.ArchiveIndexStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hr.management.system.entity.Leave;
import com.hr.management.system.entity.Project;
import com.hr.management.system.repository.ProjectRepository;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }
    
    
    public List<Project> saveAllProject(List<Project> projectList) {

		return projectRepository.saveAll(projectList);
	}

    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project updateProjectById(Long  id ,Project project) {
    	
    	Project existing =projectRepository.findById(id)
    			.orElseThrow(()->new RuntimeException("employee is not found"+id));
        existing.setClient(project.getClient());
        existing.setCompletion(project.getCompletion());
        existing.setEndDate(project.getEndDate());
        existing.setId(project.getId());
        existing.setManager(project.getManager());
        existing.setName(project.getName());
        existing.setMembers(project.getMembers());
        existing.setStartDate(project.getStartDate());
        existing.setStatus(project.getStatus());
        
    	
        return projectRepository.save(existing);
    }

    public void deleteById(Long id) {
        projectRepository.deleteById(id);
    }

    public void deleteAll() {
        projectRepository.deleteAll();
    }

	
}
