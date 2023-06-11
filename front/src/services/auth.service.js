import axios from 'axios';
import { BehaviorSubject, tap } from 'rxjs';

const baseUrl = "http://localhost:3000/auth";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};
const currentUserSubject = new BehaviorSubject(null);
const currentUser = currentUserSubject.asObservable();

function login(email, password) {
    return axios.post(`${baseUrl}/login`, { email, password }).then(response => {
        localStorage.setItem('token', response.data.access_token);
        return response.data;
    });
}

function getCurrentUser() {
    return axios.get(`${baseUrl}/profile`, { headers }).then(response => response.data);
}

// function getCurrentUser() {
//     return axios.get(`${baseUrl}/profile`, { headers })
//         .pipe(
//             tap(response => { currentUserSubject.next(response.data) })
//         );
// }

function getCurrentUserSubject() {
    return currentUserSubject.asObservable();
}

function logout() {
    localStorage.removeItem('token');
    currentUserSubject.next(null);
}

export const authService = {
    login,
    getCurrentUser,
    getCurrentUserSubject,
    logout
};