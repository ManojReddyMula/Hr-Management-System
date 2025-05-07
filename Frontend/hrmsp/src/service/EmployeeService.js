import axios from 'axios';

export const saveEmployee= (employee) => {
    return axios.post('http://localhost:8080/api/employee/save',employee)
}

    export  const getEmployeeById = (employeeId) => {
        return axios.get(` http://localhost:8080/api/employee/${employeeId}`);

    }

    export const deleteEmployeeById= (id) => {
        return axios.delete(`http://localhost:8080/api/employee/${id}`);
    };

    export const getAllEmployee= () =>{
        return axios.get(`http://localhost:8080/api/employee/all`);

    };

    export const updateEmployee = (id,employee) => {
        return axios.put(`http://localhost:8080/api/employee/${id}`,employee);
    }

  

