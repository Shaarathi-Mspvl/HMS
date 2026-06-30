import axios from 'axios';
const REST_API_BASE_URL="http://localhost:8080/doctor"

export const listDoctors=()=>axios.get(REST_API_BASE_URL);

export const CreateDoctors=(doctor)=>axios.post(REST_API_BASE_URL,doctor);