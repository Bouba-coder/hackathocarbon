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