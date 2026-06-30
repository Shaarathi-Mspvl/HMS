import React,{useEffect, useState} from 'react'
import { listPatients } from '../Services/PatientService'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const ListPatientComp = () => {
   const [patients,setPatients] =useState([])

   const navigator=useNavigate();

   useEffect(()=>{
    listPatients().then((Response)=>{
        setPatients(Response.data);
    }).catch(error=>{
        console.error(error);
    });
   },[])

   function addPatient(){
        navigator('/add-patient')
   }

    return (
    <div>
        <h2>List of Patients</h2>
        <button type='button' onClick={addPatient}>Add</button>
        <table>
             <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Reason</th>
                    <th>Phone number</th>
                    <th>Address</th>
                </tr>
            </thead>
                <tbody>
                    {
                        patients.map(patient=>(
                            <tr key={patient.patientId}>
                                <td>{patient.patientId}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.reason}</td>
                                <td>{patient.phoneNumber}</td>
                                <td>{patient.address}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
  )
}

export default ListPatientComp