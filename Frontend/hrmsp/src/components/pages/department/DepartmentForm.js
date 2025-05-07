import  { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import {Link} from 'react-router-dom';
import { saveDepartment } from '../../../service/DepartmentService';

const DepartmentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 


  // State
  const [department, setDepartment] = useState({
    departmentname: '',
    manager: '',
    employeeCount: '',
    location: '',
  });

 
  


  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      await saveDepartment(department);
      toast.success("Department created successfully");
        navigate('/departments');
   
    }catch(error){
      console.log(error);
      toast.error("failed to create department" );
    }

  };


    const handleChange = (e) => {
      const { name, value } = e.target;
      setDepartment({ ...department, [name]: value });
    };
  

  



  return (
    <div className="container py-4">

      
       
      <div className="d-flex justify-content-end mb-3">
  <Link to="/departments" className="btn btn-secondary">
    <i className="bi bi-arrow-right me-2"></i>Back
  </Link>
</div>


      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

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
          <button type="submit" className="btn btn-success">
         Create Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentForm;
