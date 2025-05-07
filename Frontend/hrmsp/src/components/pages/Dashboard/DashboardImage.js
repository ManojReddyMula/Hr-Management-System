import React from 'react'

function DashboardImage  ({ image, quote, author })  {
  return (
    <div className="card shadow rounded-3 p-3 m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top rounded" alt="Motivational" />
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0">
          <p>"{quote}"</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DashboardImage
