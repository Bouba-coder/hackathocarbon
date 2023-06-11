import axios from 'axios';

const baseUrl = "http://localhost:3000/user";

function getAll() {
    return axios.get(baseUrl).then(response => response.data);
}

function getById(id) {
    return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

function create(user) {
    return axios.post(baseUrl, user).then(response => response.data);
}

function update(id, user) {
    return axios.patch(`${baseUrl}/${id}`, user).then(response => response.data);
}

function remove(id) {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
}

function unsubscribe(id, formationId) {
    return axios.patch(`${baseUrl}/${id}/unsubscribe/formations/${formationId}`).then(response => response.data);
}

export const userService = {
    getAll,
    getById,
    create,
    update,
    remove,
    unsubscribe
};