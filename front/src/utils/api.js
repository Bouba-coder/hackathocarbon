import axios from 'axios'


//get consultants
export const getConsultants = async () => {
    const response = await axios.get('http://localhost:3000/consultant')
    return response.data
}

//get consultant by id
export const getConsultantById = async (id) => {
    const response = await axios.get(`http://localhost:3000/consultant/${id}`)
    return response.data
}

//get all formations
export const getFormations = async () => {
    const response = await axios.get('http://localhost:3000/formations')
    return response.data
}

//get all articles
export const getArticles = async () => {
    const response = await axios.get('http://localhost:3000/article')
    return response.data
}

//add article
export const addArticle = async (article) => {
    const response = await axios.post(`http://localhost:3000/article`, article)
    return response.data
}

//get all commentaire where articleId
export const getCommentairesByAuthorId = async (id) => {
    const response = await axios.get(`http://localhost:3000/commentaire/article/${id}`)
    return response.data
}

//add commentaire
export const addCommentaire = async (commentaire) => {
    const response = await axios.post(`http://localhost:3000/commentaire`, commentaire)
    return response.data
}