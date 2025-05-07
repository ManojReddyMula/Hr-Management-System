import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login=()=> {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const val = type === 'checkbox' ? checked : value;
      
      setFormData(prev => ({ ...prev, [name]: val }));
      
      // Clear error when field is edited
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };
  
    const validate = () => {
      const newErrors = {};
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validate()) {
        setIsLoading(true);
        
        // In a real app, this would send a POST request to your API
        setTimeout(() => {
          // Mock success login for demo - in real app would validate via backend
          if (formData.username === 'admin' && formData.password === 'password') {
            // Store authentication token in real application
            localStorage.setItem('isLoggedIn', 'true');
            toast.success('Login successful!');
            navigate('/');
          } else {
            setErrors({
              authentication: 'Invalid username or password'
            });
            toast.error('Login failed. Invalid credentials.');
          }
          
          setIsLoading(false);
        }, 1000);
      }
    };
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow mt-5">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold">HR Nexus</h2>
                  <p className="text-muted">Sign in to your account</p>
                </div>
                
                {errors.authentication && (
                  <div className="alert alert-danger">{errors.authentication}</div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  
                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>
                
                <div className="text-center mt-4">
                  <p className="text-muted">
                    Demo credentials: 
                    <span className="fw-bold ms-1">admin / password</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  