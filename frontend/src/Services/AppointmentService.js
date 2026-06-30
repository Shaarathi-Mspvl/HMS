import axios from 'axios';

const REST_API_BASE_URL="http://localhost:8080/appointment"

export const listAppointments=()=>axios.get(REST_API_BASE_URL);


export const CreateAppointments = (appointment, doctorId, patientId) => {
    return axios.post(
        `http://localhost:8080/appointment/book?doctorId=${doctorId}&patientId=${patientId}`,
        appointment
    );
};