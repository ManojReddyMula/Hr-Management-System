import axios from 'axios';

export const saveProject= (project) => {
    return axios.post('http://localhost:8080/api/project/save', project)
}

    export  const getProjectById = (id) => {
        return axios.get(`http://localhost:8080/api/project/${id}`);

    }

    export const deleteProjectById= (id) => {
        return axios.delete(`http://localhost:8080/project/${id}`);
    };

    export const getAllProject= () =>{
        return axios.get(`http://localhost:8080/api/project/all`);

    }

    export const updateProject = (id,project) => {
        return axios.put(`http://localhost:8080/api/project/${id}`,project);
    }

  

