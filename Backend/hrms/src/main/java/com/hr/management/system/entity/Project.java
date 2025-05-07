package com.hr.management.system.entity;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import com.hr.management.system.repository.ProjectRepository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
	@Table(name = "project")
	public class Project {
	
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "project_id")
	    private Long id;

	    private String name;

	    private String client;

	    private String manager;

	    private LocalDate startDate;

	    private LocalDate endDate;

	    private String status;

	    private int members;

	    private int completion;

	    
	    public Project() {
	    	
	    }

		public Project(Long id, String name, String client, String manager, LocalDate startDate, LocalDate endDate,
				String status, int members, int completion) {
			super();
			this.id = id;
			this.name = name;
			this.client = client;
			this.manager = manager;
			this.startDate = startDate;
			this.endDate = endDate;
			this.status = status;
			this.members = members;
			this.completion = completion;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getClient() {
			return client;
		}

		public void setClient(String client) {
			this.client = client;
		}

		public String getManager() {
			return manager;
		}

		public void setManager(String manager) {
			this.manager = manager;
		}

		public LocalDate getStartDate() {
			return startDate;
		}

		public void setStartDate(LocalDate startDate) {
			this.startDate = startDate;
		}

		public LocalDate getEndDate() {
			return endDate;
		}

		public void setEndDate(LocalDate endDate) {
			this.endDate = endDate;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public int getMembers() {
			return members;
		}

		public void setMembers(int members) {
			this.members = members;
		}

		public int getCompletion() {
			return completion;
		}

		public void setCompletion(int completion) {
			this.completion = completion;
		}
	    
	  


}