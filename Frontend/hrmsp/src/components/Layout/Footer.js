import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            {/* Left side navigation links */}
            <div className="col-md-6">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/employees">Employee</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/departments">Department</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/leaves">Leave</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/projects">Project</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
              </ul>
            </div>

            {/* Right side footer text */}
            <div className="col-md-6 text-md-end">
              <p className="mb-2">© 2025 HR Nexus - All Rights Reserved</p>
              <p className="mb-2">Designed for better HR management</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
