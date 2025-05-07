import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster }  from 'sonner';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './components/pages/auth/Login';
import Department from './components/pages/department/Department';
import EmployeeForm from './components/pages/employee/EmployeeForm';
import EmployeeList from './components/pages/employee/EmployeeList';
import LeaveList from './components/pages/leave/LeaveList';
import ProjectList from './components/pages/project/ProjectList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepartmentForm from './components/pages/department/DepartmentForm';
import LeaveForm from './components/pages/leave/LeaveForm';
import ProjectForm from './components/pages/project/ProjectForm';

import Dashboard from './components/pages/Dashboard/Dashboard';
import UpdateForm from './components/pages/employee/UpdateEmployeeForm';


import NotFound from './components/pages/NotFound';
import ViewEmployee from './components/pages/employee/ViewEmployee';
import UpdateDepartment from './components/pages/department/UpdateDepartment';
import ViewDepartment from './components/pages/department/ViewDepartment';
import ViewProject from './components/pages/project/ViewProject'
import UpdateProject from './components/pages/project/UpdateProject';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Toaster position="top-center" richColors />
      <div className='container'>
        <h1 className='text-center'>Welcome to  PeopleIQ</h1>
        <p className='text-center'>This is HR Management System</p>

        <Routes>
          <Route path="/" element={<Dashboard/>} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employeeform" element={<EmployeeForm />} />
          <Route path="/leaves" element={<LeaveList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/departmentform" element={<DepartmentForm/>}/>
          <Route path='/leave/apply'element={<LeaveForm/>}/>
          <Route path='/project/add' element={<ProjectForm/>}/>
          <Route path="/update-employee/:id" element={<UpdateForm />} />
          <Route path="/viewemployee/:id" element= {<ViewEmployee/>}/>

          <Route path="/updatedepartment/:id" element={<UpdateDepartment/>}/>
          <Route path="/viewdepartment/:id" element={<ViewDepartment/>}/>

          <Route path='/viewprojects/:id' element ={<ViewProject/>}/>
          <Route path="/updateprojects/:id" element={<UpdateProject/>}/>
 

          
        

          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;