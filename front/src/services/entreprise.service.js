import axios from 'axios';

const baseUrl = "http://localhost:3000/entreprises";

function getAll() {
    return axios.get(baseUrl).then(response => response.data);
}

function getById(id) {
    return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

function create(entreprise) {
    return axios.post(baseUrl, entreprise).then(response => response.data);
}

function update(id, entreprise) {
    return axios.patch(`${baseUrl}/${id}`, entreprise).then(response => response.data);
}

function remove(id) {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
}

export const entrepriseService = {
    getAll,
    getById,
    create,
    update,
    remove
};