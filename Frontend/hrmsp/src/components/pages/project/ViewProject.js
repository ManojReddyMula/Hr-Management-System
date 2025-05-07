import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjectById } from '../../../service/ProjectService';
import { toast } from 'sonner';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ViewProject = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  const[isLoading, setIsLoading]=useState(true);
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

  useEffect(() =>{
    const fetchProjectData =async () =>{
        try{
            const response =await getProjectById(id);
            setFormData(response.data);
            setIsLoading(true)
            toast.success("project Fetchded Succefully");
            toast.error("project not found");

        }catch(error){
            console.error("Failed to fetch project" );
            toast.error("failed to fetch project data");
        }
    }
    fetchProjectData();
  },[id]);

 

  return (
    <div className="container py-4">
 <div className="d-flex justify-content-end mb-3">
  <Link to="/departments" className="btn btn-secondary">
    <i className="bi bi-arrow-right me-2"></i>Back
  </Link>
</div>

      <h1 className="page-title mb-4">View Project</h1>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Client</label>
          <input
            type="text"
            className="form-control"
            name="client"
            value={formData.client}
            readOnly
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
            readOnly
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={formData.startDate}
            readOnly
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={formData.endDate}
            readOnly
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
            disabled
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
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Completion (%)</label>
          <input
            type="number"
            className="form-control"
            name="completion"
            value={formData.completion}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
