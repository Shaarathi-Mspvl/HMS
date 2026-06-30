import React ,{useEffect,useState}from 'react'
import { listAppointments } from '../Services/AppointmentService'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const ListAppointmentComp = () => {
    const [appointments,setappointments] =useState([])
    
       useEffect(()=>{
        listAppointments().then((Response)=>{
            setappointments(Response.data);
        }).catch(error=>{
            console.error(error);
        });
       },[])

       const navigator=useNavigate();
    
        function addappointment(){
                navigator('/add-appointment')
        }
        return (
        <div>
             <h2>List of Appointments</h2>
            <button onClick={addappointment}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Appointment Date</th>
                        <th>Doctor Id</th>
                        <th>Patient Id</th>
                        <th>Prescription</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            appointments.map(appointment=>(
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.appointmentDate}</td>
                                    <td>{appointment.doctorId}</td> 
                                    <td>{appointment.patientId}</td>
                                    <td>{appointment.prescription}</td>
                                    <td>{appointment.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
         </div>
      )
}

export default ListAppointmentComp