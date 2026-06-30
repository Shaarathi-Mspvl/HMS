import React from 'react'
import { useState } from 'react'
import { CreatePatients } from '../Services/PatientService';
import { useNavigate } from 'react-router-dom';
import '../App.css'


const PatientComponent = () => {
  
    
   const[name,setName]=useState('');
   const[age,setAge]=useState('');
    const[reason,setReason]=useState('');
    const[phoneNumber,setphoneNumber]=useState('');
    const[address,setaddress]=useState('');
  
    
  const navigator=useNavigate();
    

    function save(e){
        e.preventDefault();
        console.log('Submitted successfully');

        const patient={name,age,reason,phoneNumber,address};
        console.log(patient);

        CreatePatients(patient).then((Response)=>{
        console.log(Response.data);
        navigator('/show-patient')
        })
    }
    
    return (
    <div>
        
        <h1>Patient Details</h1>
            <label>Name</label>
            <input type='text' placeholder='Enter patient name' required onChange={(e)=>setName(e.target.value)}/>
  
                      
            <label>Age</label>
            <input type='number' placeholder='Enter patient age' required onChange={(e)=>setAge(e.target.value)} />
          
             <label>Reason</label>
            <input type='text'  placeholder='Enter reason' required onChange={(e)=>setReason(e.target.value)} />
            
            <label>Phone number</label>
            <input type='tel' placeholder='Enter phone number' required onChange={(e)=>setphoneNumber(e.target.value)} maxLength={10}/>
            
              <label>Address</label>
              <input type='text' placeholder='Enter address' required onChange={(e)=>setaddress(e.target.value)} />
           
           
           <button className='submit-button' onClick={save}>Submit</button>
        
    </div>
  )
}

export default PatientComponent