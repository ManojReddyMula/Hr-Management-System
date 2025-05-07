
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner';
import {getAllEmployee,deleteEmployeeById,updateEmployee} from '../../../service/EmployeeService';
import { toast } from 'sonner';



const EmployeeList = () => {
  
 
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  useEffect(() => {
    // In a real app, this would fetch from your API
   
   fetchEmployees();
  },[]);
  const fetchEmployees = async () =>{
    try{
      const response=await getAllEmployee();
      setEmployees(response.data);
      console.log(response.data)
      

      setIsLoading(false);
      toast.success("Employees loadedd successfully");


    } catch(error){
      console.error("Error fetching employees:",error);
      toast.error("Error fetching employees");
      setIsLoading(false);


    }
    
  }
  useEffect( () =>{
    setCurrentPage(1)
  },[searchTerm] )
      
     

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => 
    (employee.name && employee.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (employee.email && employee.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (employee.position && employee.position.toLowerCase().includes(searchTerm.toLowerCase())) ||
   
    (
      (employee.department?.name && employee.department.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.department?.id && employee.department.id.toString().includes(searchTerm))
    )
    
  );
  
  // Pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handleDeleteById = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
     
    
      try {
        await deleteEmployeeById(id); // API call to backend
        setEmployees((prev) => prev.filter((employee) => employee.id !== id)); // Update state
        toast.success('Employee deleted successfully!');
      } catch (error) {
        console.error('Error deleting employee:', error);
        toast.error('Failed to delete employee.');
      }
    }
  
  };
  


  

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">Employees</h1>
        <Link to="/employeeform" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2" 
         ></i>Add Employee
        </Link>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.length > 0 ? (
                  currentEmployees.map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.employeename}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phoneNumber}</td>
                      <td>{employee.position}</td>
                      <td>{employee.departmentname}</td>
                      <td>
                        <Link to={`/viewemployee/${employee.id}`} className="btn btn-sm btn-info me-2">
                    
                          <i className="bi bi-eye"></i>
                        </Link>
                        <Link to={`/update-employee/${employee.id}`} className="btn btn-sm btn-secondary me-2">

                        
                          <i className="bi bi-pencil"></i>
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteById(employee.id,employee)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">No employees found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(totalPages).keys()].map(number => (
                  <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(number + 1)}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
