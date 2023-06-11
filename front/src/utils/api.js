import axios from 'axios'

const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
});

//get user by id
export const getUserById = (id) => {
    return axios.get(`http://localhost:3000/user/${id}`, headers)
}

//get consultants
export const getConsultants = async () => {
    const response = await axios.get('http://localhost:3000/consultant', headers)
    return response.data
}

//get consultant by id
export const getConsultantById = async (id) => {
    const response = await axios.get(`http://localhost:3000/consultant/${id}`, headers)
    return response.data
}

//get all formations
export const getFormations = async () => {
    const response = await axios.get('http://localhost:3000/formations', headers)
    return response.data
}

//postuler à une formation
export const subscribFormation = async (formationsId, userId) => {
    const formation = {
        "formationsId": formationsId,
        "userId": userId
    }
    console.log("subscribFormation", formation)
    const response = await axios.post(`http://localhost:3000/user/:${userId}/subscribe/formations/:${formationsId}`, formation)
    return response.data
}

//get all articles
export const getArticles = async () => {
    const response = await axios.get('http://localhost:3000/article', headers)
    return response.data
}

//add article
export const addArticle = async (article) => {
    const response = await axios.post(`http://localhost:3000/article`, article, headers)
    return response.data
}

//get all commentaire where articleId
export const getCommentairesByAuthorId = async (id) => {
    const response = await axios.get(`http://localhost:3000/commentaire/article/${id}`, headers)
    return response.data
}

//get all commentaire 
export const getCommentaires = async () => {
    const response = await axios.get(`http://localhost:3000/commentaire`, headers)
    return response.data
}

//add commentaire
export const addCommentaire = async (commentaire) => {
    const response = await axios.post(`http://localhost:3000/commentaire`, commentaire, headers)
    return response.data
}