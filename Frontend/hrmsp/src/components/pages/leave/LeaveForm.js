import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const LeaveForm = () => {
  const [leave, setLeave] = useState({
    type: '',
    fromDate: '',
    toDate: '',
    days: '',
    reason: '',
    status: '',
    employeeid: '',
  });

  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch employee list for dropdown
    axios.get('http://localhost:8080/api/employee/all')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeave(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/leave/save', leave)
      .then(response => {
        setSuccessMessage('Leave applied successfully!');
        setLeave({
          type: '',
          fromDate: '',
          toDate: '',
          days: '',
          reason: '',
          status: '',
          employeeid: '',
        });
      })
      .catch(error => {
        console.error('Error applying for leave:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h3>Apply for Leave</h3>

      <Link to="/leaves" className="btn btn-secondary">
    <i className="bi bi-arrow-left me-2"></i>Back
  </Link>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Employee</label>
          <select
            className="form-select"
            name="employeeid"
            value={leave.employeeid}
            onChange={handleChange}
            required
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.id}>{emp.employeename}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Leave Type</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={leave.type}
            onChange={handleChange}
            placeholder="e.g., Sick, Casual"
            required
          />
        </div>

        <div className="row">
          <div className="mb-3 col">
            <label className="form-label">From Date</label>
            <input
              type="date"
              className="form-control"
              name="fromDate"
              value={leave.fromDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col">
            <label className="form-label">To Date</label>
            <input
              type="date"
              className="form-control"
              name="toDate"
              value={leave.toDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col">
            <label className="form-label">Number of Days</label>
            <input
              type="number"
              className="form-control"
              name="days"
              value={leave.days}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea
            className="form-control"
            name="reason"
            value={leave.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={leave.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit Leave</button>
      </form>
    </div>
  );
};

export default LeaveForm;
