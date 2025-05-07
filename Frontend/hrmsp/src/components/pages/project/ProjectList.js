
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner';
import { toast } from 'sonner';
import { getAllProject } from '../../../service/ProjectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () =>{
      try{
        const response =await getAllProject();
        setProjects(response.data);
        setIsLoading(false);
        toast.success("project loaded successfully");
      } catch(error){
        console.error("Filed to load ");
        setIsLoading(false);

      }
      
    }
    
     fetchProjects();    
  }, []);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'In Progress': return 'bg-primary';
      case 'Not Started': return 'bg-secondary';
      case 'On Hold': return 'bg-warning';
      default: return 'bg-info';
    }
  };

 

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">Projects</h1>
        <Link to="/project/add" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Add Project
        </Link>
      </div>
      
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{project.name}</h5>
                  <span className={`badge ${getStatusBadgeClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <p className="mb-1"><strong>Client:</strong> {project.client}</p>
                  <p className="mb-1"><strong>Manager:</strong> {project.manager}</p>
                  <p className="mb-1">
                    <strong>Timeline:</strong> {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </p>
                  <p className="mb-1"><strong>Team Members:</strong> {project.members}</p>
                </div>
                
                <div className="mb-2">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Progress</span>
                    <span>{project.completion}%</span>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div 
                      className={`progress-bar ${project.completion === 100 ? 'bg-success' : 'bg-primary'}`} 
                      role="progressbar" 
                      style={{ width: `${project.completion}%` }}
                      aria-valuenow={project.completion} 
                      aria-valuemin="0" 
                      aria-valuemax="100">
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <Link to={`/viewprojects/${project.id}`} className="btn btn-info btn-sm">
                    <i className="bi bi-eye me-1"></i> Details
                  </Link>
                  <div>
                    <Link to={`/updateprojects/${project.id}`} className="btn btn-secondary btn-sm me-2">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
