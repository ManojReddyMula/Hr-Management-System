import React, { useState, useEffect } from 'react';
import {Link, useNavigate,useParams} from 'react-router-dom';
import { toast } from 'sonner';
import { getAllDepartment, getDepartmentById }  from '../../../service/DepartmentService';


const ViewDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  

const[isLoading, setIsLoading]=useState(true);
  const [department, setDepartment] = useState({
    departmentname: '',
    manager: '',
    employeecount: '',
    location: '',
  });

 
  useEffect(() =>{
    const fetchData =async () =>{

      try{
        const response =await getDepartmentById(id);
        setDepartment(response.data);
        console.log(response.data);
        toast.success("Department fetched successfully");
     
      } catch(error){
        console.error(error)
        toast.error("Error fetching department data:" +error)
        setIsLoading(false);
      }
    };
    fetchData();
       
  },[id])




  return (
     <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2> Department Details</h2>
            <Link to="/departments" className="btn btn-secondary">Back to List</Link>
          </div>
     

        <div className="mb-3">
      
          <label className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            name="departmentname"
            value={department.departmentname}
            readOnly
            
        
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Manager</label>
          <input
            type="text"
            className="form-control"
            name="manager"
            value={department.manager}
           readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Count</label>
          <input
            type="number"
            className="form-control"
            name="employeeCount"
            value={department.employeecount}
            readOnly
        
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={department.location}
            readOnly
        
          />
          
        </div>

        
      
    </div>
  );
};

export default ViewDepartment;
