import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateDoctors } from '../Services/DoctorService';
import '../App.css'

const DoctorComponent = () => {

    const[doctorName,setdoctorName]=useState('');
    const[phoneNumber,setphoneNumber]=useState('');
    const[specialization,setspecialization]=useState('');
    const [availableDate,setavailableDate]=useState('');
  


    const navigator=useNavigate();

    function save(e){
        e.preventDefault();
        console.log("successfully submited");

        const doctor={doctorName,phoneNumber,specialization,availableDate};
        console.log(doctor);

        CreateDoctors(doctor).then((response)=>{
            console.log(response.data);
            navigator('/show-doctor')
        })

    }

    return (
    <div><h1>Doctor Details</h1>
    
        <label>Name</label>
        <input type='text' placeholder='Enter doctor name' onChange={(e)=>setdoctorName(e.target.value)}/>
                             
        <label>Phone Number</label>
        <input type='tel' placeholder='Enter phone number' maxLength={10} onChange={(e)=>setphoneNumber(e.target.value)}/>

        <label>Specialization</label>
        <input type='text' placeholder='Enter specialization' onChange={(e)=>setspecialization(e.target.value)}/>
      
        <label>Available Date</label>
        <input type='date' placeholder='Enter person title' onChange={(e)=>setavailableDate(e.target.value)}/>
       <button className='submit-button' onClick={save}>Submit</button>
        
    </div>
  )
}

export default DoctorComponent