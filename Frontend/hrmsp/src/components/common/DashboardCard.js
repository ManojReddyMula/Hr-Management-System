
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, count, icon, color, link }) => {
  return (
    <div className="col-md-3 mb-4">
      <Link to={link} className="text-decoration-none">
        <div className="card h-100">
          <div className="card-body text-center">
            <div className={`icon-circle bg-${color} mb-3`}>
              <i className={`bi ${icon} text-white`}></i>
            </div>
            <h5 className="card-title">{title}</h5>
            <h2 className="mb-0">{count}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashboardCard;
