import React from 'react';
import DashboardCard from '../../common/DashboardCard';
import DashboardImage from './DashboardImage';
import{navigate} from 'react-router-dom'

import { FaChartLine, FaUsers, FaCalendarAlt, FaProjectDiagram, FaImages, FaVideo, FaPlay, FaQuoteLeft } from 'react-icons/fa';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
 const  navigate =useNavigate();
  const cardData = [
    { title: 'Departments', count: 5, icon: 'bi-building', color: 'primary', link: '/departments' },
    { title: 'Employees', count: 32, icon: 'bi-people', color: 'success', link: '/employees' },
    { title: 'Leaves', count: 12, icon: 'bi-calendar-check', color: 'warning', link: '/leaves' },
    { title: 'Projects', count: 8, icon: 'bi-kanban', color: 'danger', link: '/projects' },
  ];

  const quotes = [
    {
      id: 1,
      text: "You don't build a business. You build people – and then people build the business",
      author: "Zig Ziglar"
    },
    {
      id: 2,
      text: "Clients do not come first. Employees come first. If you take care of your employees, they will take care of the clients",
      author: "Richard Branson"
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New employee joined', time: '2 hours ago', type: 'employee' },
    { id: 2, action: 'Project deadline updated', time: '4 hours ago', type: 'project' },
    { id: 3, action: 'Leave request approved', time: '1 day ago', type: 'leave' },
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: '/media/images/team.jpg',
      title: 'Team Collaboration',
      description: 'Our amazing team working together'
    },
    {
      id: 2,
      type: 'image',
      src: '/media/images/joininghands.jpg',
      title: 'Team Spirit',
      description: 'Unity in diversity'
    }
  ];

  

 

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section mb-4">
        <h1 className="display-4">Welcome back!</h1>
        <p className="lead text-muted">Here's what's happening in your organization today.</p>
      </div>

      {/* Inspirational Quotes */}
      <div className="quotes-section mb-4">
        <div className="row g-4">
          {quotes.map((quote) => (
            <div key={quote.id} className="col-md-6">
              <div className="quote-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">- {quote.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
    
<div className="row g-4 mb-4">
  {cardData.map((card, index) => (
    <DashboardCard
      key={index}
      title={card.title}
      count={card.count}
      icon={card.icon}
      color={card.color}
      link={card.link}
    />
  ))}
</div>



      <div className="row g-4">
        {/* Main Content */}
        <div className="col-md-8">
          {/* Quick Actions */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Quick Actions</h5>
              <div className="d-flex gap-3">
                <button className="btn btn-primary" onClick={() =>navigate("/employeeform")}>
                  <FaUsers className="me-2" /> Add Employee
                </button>
                <button className="btn btn-success" onClick={() => navigate("/leave/apply")}>
  <FaCalendarAlt className="me-2" /> Request Leave
</button>
<button className="btn btn-info text-white" onClick={() => navigate("/project/add")}>
  <FaProjectDiagram className="me-2" /> New Project
</button>

              </div>
            </div>
          </div>

         

          {/* Media Gallery */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">
                <FaImages className="me-2" /> Media Gallery
              </h5>
              <div className="row g-4">
                {mediaItems.map((item) => (
                  <div key={item.id} className="col-md-6">
                    <div className="media-card">
                      <div className="media-preview">
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="media-info mt-2">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-muted small mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          {/* Recent Activity */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Recent Activity</h5>
              <div className="activity-list">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="activity-item d-flex align-items-center mb-3">
                    <div className="activity-icon me-3">
                      {activity.type === 'employee' && <FaUsers className="text-primary" />}
                      {activity.type === 'project' && <FaProjectDiagram className="text-success" />}
                      {activity.type === 'leave' && <FaCalendarAlt className="text-warning" />}
                    </div>
                    <div>
                      <p className="mb-0">{activity.action}</p>
                      <small className="text-muted">{activity.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Dashboard;
