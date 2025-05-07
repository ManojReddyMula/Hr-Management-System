import axios from 'axios';

export const saveDepartment= (department) => {
    return axios.post('http://localhost:8080/api/department/save',department)
}

    export  const getDepartmentById = (id) => {
        return axios.get(`http://localhost:8080/api/department/${id}`);

    }

    export const deleteDepartmentById= (id) => {
        return axios.delete(`http://localhost:8080/api/department/${id}`);
    };

    export const getAllDepartment= () =>{
        return axios.get(`http://localhost:8080/api/department/all`);

    }

    export const updateDepartment = (id,department) => {
        return axios.put(`http://localhost:8080/api/department/${id}`,department);
    }

  

