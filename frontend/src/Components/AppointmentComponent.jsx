import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateAppointments } from '../Services/AppointmentService';

import '../App.css'

const AppointmentComponent = () => {

    
    
    const [appointmentDate,setappointmentDate]=useState('');
    const[prescription,setprescription]=useState('');
    const[amount,setamount]=useState('');
    const [doctorId,setdoctorId]=useState('');
    const [patientId,setpatientId]=useState('');
    

    const navigator=useNavigate();


  function save(e){
    e.preventDefault();
    console.log("submitted successfully");

    const appointment={appointmentDate,prescription,amount};
    console.log(appointment);

   CreateAppointments(appointment, doctorId, patientId)
    .then((response) => {
        console.log(response.data);
        navigator('/show-appointment');
    })

  }
    return (
    <div>
       <h1>Appointment Details</h1>
        
        
              
        <label>Appointment Date</label>
        <input type='date' placeholder='Enter appointment date' onChange={(e)=>setappointmentDate(e.target.value)}/>
        <label>Prescription</label>
        <input type='text' placeholder='prescription' onChange={(e)=>setprescription(e.target.value)}/>
        <label>Amount</label>
        <input type='number' placeholder='prescription' onChange={(e)=>setamount(e.target.value)}/>
        <label>Doctor id</label>
        <input type='number' placeholder='Enter prescription' onChange={(e)=>setdoctorId(e.target.value)}/>
        
        <label>Patient id</label>
        <input type='number' placeholder='Enter amount' onChange={(e)=>setpatientId(e.target.value)}/>
        <button className='submit-button' onClick={save}>Submit</button>
        
      </div>
  )
}

export default AppointmentComponent