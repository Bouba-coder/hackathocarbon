import axios from 'axios';

const baseUrl = "http://localhost:3000/consultant";

function getAll() {
    return axios.get(baseUrl).then(response => response.data);
}

function getById(id) {
    return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

function create(consultant) {
    return axios.post(baseUrl, consultant).then(response => response.data);
}

function update(id, consultant) {
    return axios.patch(`${baseUrl}/${id}`, consultant).then(response => response.data);
}

function remove(id) {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
}

export const consultantService = {
    getAll,
    getById,
    create,
    update,
    remove
};