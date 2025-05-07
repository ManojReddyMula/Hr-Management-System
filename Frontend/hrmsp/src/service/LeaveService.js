import axios from 'axios';

export const saveLeave= (leave) => {
    return axios.post('http://localhost:8080/api/leave/save',   leave)
}

    export  const getleaveById = (id) => {
        return axios.get(`http://localhost:8080/api/leave /${id}`);

    }
    export const getAllLeaves =() =>{
        return axios.get(`http://localhost:8080/api/leave/all`);
    }

    export const saveAll = (leavlist)=>{
        return axios.post(`http://localhost:8080/api/leave/all`,leavlist)

    }
    export const deleteLeaveById= (id) => {
        return axios.delete(`http://localhost:8080/api/leave/${id}`);
    };

   

    
    export const updateLeave = (leave,id) => {
        return axios.put(`http://localhost:8080/api/leave/${id}`,leave);
    }

  

