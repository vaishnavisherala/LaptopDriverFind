import React from 'react'
import Home from '../Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SoftwareDriver from '../Components/SoftwareDriver'
import Navbar from '../Components/Navbar'
import ContactUs from '../Components/ContactUs'
import Accessories from '../Components/Accessories'

function Appnavigator() {

  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/softwaredriver' element={<SoftwareDriver />} />
          <Route path='/accessories' element={<Accessories/>} />
          
          <Route path='/contactus' element={<ContactUs />} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Appnavigator
