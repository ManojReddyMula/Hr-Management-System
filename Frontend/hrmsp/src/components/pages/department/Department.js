
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from  '../../common/LoadingSpinner';
import {deleteDepartmentById, getAllDepartment} from '../../../service/DepartmentService';

import { toast } from 'sonner';
import { SiAnsys } from 'react-icons/si';

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getAllDepartment();
        setDepartments(response.data);
        setIsLoading(false);
        toast.success("Departments loaded successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to get departments: " + error.message);
        setIsLoading(false); // <-- fixed this too
      }
    };
  
    fetchDepartments(); // <-- you forgot to call the function!
  }, []);
  
    
     
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        const response = await deleteDepartmentById(id);
        setDepartments(departments.filter(department => department.id !== id));
        toast.success("Department deleted successfully");
        console.log(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete Department");
        setIsLoading(false);
      }
    }
  };
  
     
   

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">Departments</h1>
        <Link to="/departmentform" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Add Department
        </Link>
      </div>
      
      <div className="row">
        {departments.map(department => (
          <div key={department.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{department.departmentname}</h5>
                <div className="dropdown">
                  <button className="btn btn-sm btn-secondary" type="button" id={`dropdown-${department.id}`} data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdown-${department.id}`}>
                
                    
                    <li>
                      <Link className="dropdown-item" to={`/updatedepartment/${department.id}`}>
                        <i className="bi bi-pencil me-2"></i>Edit
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={() => handleDelete(department.id)}
                      >
                        <i className="bi bi-trash me-2"></i>Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <p><strong>Manager:</strong> {department.manager}</p>
                <p><strong>Employees:</strong> {department.employeecount}</p>
                <p><strong>Location:</strong> {department.location}</p>
              </div>
              <div className="card-footer">
                <Link to={`/viewdepartment/${department.id}`} className="btn btn-sm btn-outline-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
