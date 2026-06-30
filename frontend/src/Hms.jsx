import React from 'react'
import { useNavigate } from 'react-router-dom'
import images0 from './images0.png'
import './App.css'

const Hms = () => {

    

  const navigator=useNavigate();
  
  function showPatient(){
    navigator('/show-patient')
  }
  function showDoctor(){
    navigator('/show-doctor')
  }
  function showAppointment(){
    navigator('/show-appointment')
  }
  
  
  return (
    <>
  <header className='main-header'>
  <div className='logo'>Hospital Management System</div>
  <nav>
    <ul className='nav-links'>
      <li><a href="#" onClick={showPatient}>Patients</a></li>
      <li><a href="#" onClick={showDoctor}>Doctors</a></li>
      <li><a href="#" onClick={showAppointment}>Appointment</a></li>
    </ul>
  </nav>
</header>

<img src={images0}/>
<footer>
  <p>Email:HMS26@gmail.com</p>
  <p>Contact:+916748983910</p>
  <p>Address:Tenkasi -627 814</p>
  <p >@copy right</p>
</footer>
    </>
  )

}

export default Hms