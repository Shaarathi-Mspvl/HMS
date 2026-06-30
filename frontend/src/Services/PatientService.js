import axios from 'axios';
const REST_API_BASE_URL="http://localhost:8080/patient"

export const listPatients=()=>axios.get(REST_API_BASE_URL);


export const CreatePatients=(patient)=>axios.post(REST_API_BASE_URL,patient);