
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner';
import { toast } from 'sonner';
import {getAllLeaves} from '../../../service/LeaveService';

const LeaveList = () => {

  const [leaves, setLeaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await getAllLeaves();
        setLeaves(response.data);
        console.log(response.data); // Correct place
        setIsLoading(false);
        toast.success("Leave data Loaded successfully");
      } catch (error) {
        toast.error("Failed to load");
        setIsLoading(false);
      }
    };
  
    fetchLeaves();
  }, []);
  
  
    
  const handleStatusUpdate = (id, newStatus) => {
    // In a real app, this would send a PATCH request to your API
    setLeaves(leaves.map(leave => 
      leave.id === id ? { ...leave, status: newStatus } : leave
    ));
    
    toast.success(`Leave request ${newStatus.toLowerCase()}!`);
  };

  const filteredLeaves = leaves.filter(leave => {
    if (filter === 'all') return true;
    return leave.status.toLowerCase() === filter.toLowerCase();
  });


  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">Leave Management</h1>
        <Link to="/leave/apply" className="btn btn-primary" >
        
        
          <i className="bi bi-plus-circle me-2"></i>Apply for Leave
        </Link>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter('pending')}
                >
                  Pending
                </button>
                <button
                  type="button"
                  className={`btn ${filter === 'approved' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter('approved')}
                >
                  Approved
                </button>
                <button
                  type="button"
                  className={`btn ${filter === 'rejected' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter('rejected')}
                >
                  Rejected
                </button>
              </div>
            </div>
          </div>
          
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaves.length > 0 ? (
                  filteredLeaves.map(leave => (
                    <tr key={leave.id}>
                    <td>{leave.id}</td>
                  <td>{leave.employeename}</td>

                   <td>{leave.type}</td>
                   <td>{new Date(leave.fromDate).toLocaleDateString()}</td>
                   <td>{new Date(leave.toDate).toLocaleDateString()}</td>
                   <td>{leave.days}</td>
                   <td>{leave.reason}</td>

                       <td>
                        <span className={`badge ${
                          leave.status === 'Approved' ? 'bg-success' : 
                          leave.status === 'Rejected' ? 'bg-danger' : 
                          'bg-warning'
                        }`}>
                          {leave.status}
                        </span>
                      </td>
                      <td>
                        {leave.status === 'Pending' && (
                          <>
                            <button
                              className="btn btn-sm btn-success me-2"
                              onClick={() => handleStatusUpdate(leave.id, 'Approved')}
                              title="Approve"
                            >
                              <i className="bi bi-check-circle"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleStatusUpdate(leave.id, 'Rejected')}
                              title="Reject"
                            >
                              <i className="bi bi-x-circle"></i>
                            </button>
                          </>
                        )}
                        {leave.status !== 'Pending' && (
                          <Link to={`/leaves/${leave.id}`} className="btn btn-sm btn-info">
                            <i className="bi bi-eye"></i>
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">No leave requests found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveList;
