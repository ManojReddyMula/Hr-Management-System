import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

import { saveEmployee } from '../../../service/EmployeeService';

const EmployeeForm = () => {
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
  employeename: '',
  email: '',
  phoneNumber: '',
  address: '',
  position: '',
  departmentname: '',
  salary: '',
  joinDate: '',
  birthDate: '',
  gender: '',
  status: 'active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await saveEmployee(employeeData); // Call the saveEmployee API to create a new employee
      toast.success('Employee created successfully!');
      navigate('/employees');
    } catch (error) {
      console.error('Error creating employee:', error);
      toast.error('Failed to create employee.');
    }
  };
  

  return (
    <div className="container py-4">
         <div className="d-flex justify-content-end mb-3">
  <Link to="/employees" className="btn btn-secondary">
    <i className="bi bi-arrow-right me-2"></i>Back
  </Link>
</div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Row 1 - Name, Email, and Phone */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="employeename"
                  className="form-control"
                  value={employeeData.employeename}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={employeeData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">PhoneNumber</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value={employeeData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2 - Address, Position, and Department */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={employeeData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  value={employeeData.position}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Department Name</label>
                <input
                  type="text"
                  name="departmentname"
                  className="form-control"
                  value={employeeData.departmentname}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 3 - Birth Date, Join Date, Gender */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  className="form-control"
                  value={employeeData.birthDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Join Date</label>
                <input
                  type="date"
                  name="joinDate"
                  className="form-control"
                  value={employeeData.joinDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={employeeData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 4 - Salary and Status */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  step="0.01"
                  name="salary"
                  className="form-control"
                  value={employeeData.salary}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={employeeData.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Create Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
