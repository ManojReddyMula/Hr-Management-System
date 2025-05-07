import React, { useState, useEffect, use } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import {getDepartmentById, updateDepartment } from '../../../service/DepartmentService';

const UpdateDepartment = () => {
  const navigate = useNavigate();
    const { id } = useParams(); 

    const[isLoading,setIsLoading]=useState(true)
    const [department, setDepartment] = useState({
      departmentname: '',
      manager: '',
      employeeCount: '',
      location: '',
    });
  
   
     useEffect(() =>{
       const fetchData =async() =>{
           try{
               const response= await getDepartmentById(id);
               setDepartment(response.data);
               console.log(response.data);
               toast.success("Department fecthed successfully");   
           }catch (error){
               console.error(error)
               toast.error("Error fetching  department data:"+error);
               setIsLoading(false);
   
   
           }
       };
       fetchData();
   
    } ,[id]
     );
   
    
    
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await updateDepartment(id, department);
          toast.success("Department updated successfully");
          navigate('/departments');
        } catch (error) {
          console.error(error);
          toast.error("Failed to update department");
        }
      };
      
  
  
  return (
     <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Update department</h2>
            <Link to="/departments" className="btn btn-secondary">Back to List</Link>
          </div>
     

        <div className="mb-3">
          <label className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            name="departmentname"
            value={department.departmentname}
            onChange={handleChange}
            placeholder="Enter department name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Manager</label>
          <input
            type="text"
            className="form-control"
            name="manager"
            value={department.manager}
            onChange={handleChange}
            placeholder="Enter manager name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Count</label>
          <input
            type="number"
            className="form-control"
            name="employeeCount"
            value={department.employeeCount}
            onChange={handleChange}
            placeholder="Enter number of employees"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={department.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        <div className="d-flex justify-content-end">
        <button onClick={handleSubmit} className="btn btn-success">
  Update Department
</button>
        </div>
      
    
    </div>
  );
};

export default UpdateDepartment;
