import React,{useEffect,useState} from 'react'
import { listDoctors } from '../Services/DoctorService'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const ListDoctorComp = () => {
  const [doctors,setdoctors] =useState([])
  
     useEffect(()=>{
      listDoctors().then((Response)=>{
          setdoctors(Response.data);
      }).catch(error=>{
          console.error(error);
      });
     },[])
  
     const navigator=useNavigate();

     function addDoctor(){
        navigator('/add-doctor')
     } 
     
     return (
      <div >
           <h2>List of Doctors</h2>
           <button onClick={addDoctor}>Add</button>
          <table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Phone number</th>
                      <th>Specialization</th>
                      <th>Available Date</th>
                      
                  </tr>
              </thead>
                  <tbody>
                      {
                          doctors.map(doctor=>(
                              <tr key={doctor.doctorId}>
                                  <td>{doctor.doctorId}</td>
                                   <td>{doctor.doctorName}</td>
                                   <td>{doctor.phoneNumber}</td>
                                  <td>{doctor.specialization}</td>
                                  <td>{doctor.availableDate}</td>
                                </tr>
                          ))
                      }
                  </tbody>
              </table>
       </div>
    )
}

export default ListDoctorComp