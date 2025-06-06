
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h1 className="display-1 fw-bold text-primary">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-4">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="bi bi-house-door me-2"></i>
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
