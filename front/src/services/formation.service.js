import axios from 'axios';

const baseUrl = "http://localhost:3000/formations";

function getAll() {
    return axios.get(baseUrl).then(response => response.data);
}

function getById(id) {
    return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

function create(formation) {
    return axios.post(baseUrl, formation).then(response => response.data);
}

function update(id, formation) {
    return axios.patch(`${baseUrl}/${id}`, formation).then(response => response.data);
}

function remove(id) {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
}

export const formationService = {
    getAll,
    getById,
    create,
    update,
    remove
};