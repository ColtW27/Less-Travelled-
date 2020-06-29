 import axios from "axios";



 export const fetchTalltales = () => {
     return axios.get('/api/talltales')
 };

 export const fetchTalltale = id => {
     return axios.get(`/api/talltales/${id}`)
 };

 export const createTalltale = data => {
     return axios.post('/api/talltales', data)
 };