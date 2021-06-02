import axios from 'axios';
import { BASE_URL } from '../constants/services.constants'


export const fetchUser =  async(id) =>{
  const response = await axios.get(`${BASE_URL}users/${id}`)
  return response.data
}