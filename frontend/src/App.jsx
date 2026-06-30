import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ListPatientComp from './Components/ListPatientComp.jsx'
import ListDoctorComp from './Components/ListDoctorComp.jsx'
import ListAppointmentComp from './Components/ListAppointmentComp.jsx'
import PatientComponent from './Components/PatientComponent.jsx'
import DoctorComponent from './Components/DoctorComponent.jsx'
import AppointmentComponent from './Components/AppointmentComponent.jsx'
import Hms from './Hms.jsx'

function App() {

    
  return(
    <>
    <BrowserRouter>
            
      <Routes>
        <Route path='/' element={<Hms/>}></Route>
        
        <Route path='/show-patient' element={<ListPatientComp/>}></Route>

        <Route path='/add-patient' element={<PatientComponent/>}></Route>
                
        <Route path='/show-doctor' element={<ListDoctorComp/>}></Route>

        <Route path='/add-doctor' element={<DoctorComponent/>}></Route>

        <Route path='/show-appointment' element={<ListAppointmentComp/>}></Route>

        <Route path='/add-appointment' element={<AppointmentComponent/>}></Route>
        
        </Routes>
        
        </BrowserRouter>
       
    
    
    
    
    </>
  )
  
}

export default App
