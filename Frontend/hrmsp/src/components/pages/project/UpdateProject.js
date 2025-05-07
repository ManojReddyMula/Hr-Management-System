import React from 'react'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjectById,updateProject } from '../../../service/ProjectService';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';


function UpdateProject() {
    const navigate = useNavigate();
    const {id} = useParams();
    const[ isLoading, setIsLoading]=useState(true) ;
    const [formData, setFormData] = useState({
      name: '',
      client: '',
      manager: '',
      startDate: '',
      endDate: '',
      status: 'Not Started',
      members: 0,
      completion: 0,
    });
  
    const statusOptions = ['Not Started', 'In Progress', 'Completed', 'On Hold'];

    useEffect(() => {
        const fetchProjectData = async () => {
          try {
            const response = await getProjectById(id);
            setFormData(response.data);
            
            setIsLoading(false);

            //toast.success("Project fetched successfully");
          } catch (error) {
            console.error("Failed to fetch project", error);
            toast.error("Failed to fetch project data");
          }
        };
        fetchProjectData();
      }, [id]);
      
    
     
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      // Convert to number for numeric fields
      const updatedValue = name === 'members' || name === 'completion' ? Number(value) : value;
      setFormData({
        ...formData,
        [name]: updatedValue,
      });
    };
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log("Form data:", formData);
  try{
    const response = await updateProject(id,formData)
    toast.success("project updated Succesfully");
    setIsLoading(false)
    navigate('/projects');
    
      
  }catch(error){
    console.error("Failed to fetch Project");
    
  }
  
};
  
    return (
      <div className="container py-4">
        <h1 className="page-title mb-4">Add Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Client</label>
              <input
                type="text"
                className="form-control"
                name="client"
                value={formData.client}
                onChange={handleChange}
                required
              />
            </div>
          </div>
  
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Manager</label>
              <input
                type="text"
                className="form-control"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
  
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Team Members</label>
              <input
                type="number"
                className="form-control"
                name="members"
                value={formData.members}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Completion (%)</label>
              <input
                type="number"
                className="form-control"
                name="completion"
                value={formData.completion}
                onChange={handleChange}
                min="0"
                max="100"
                required
              />
            </div>
          </div>
  
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg w-50">
              Update Project
            </button>
          </div>
        </form>
      </div>
    );
  };
  

export default UpdateProject;
