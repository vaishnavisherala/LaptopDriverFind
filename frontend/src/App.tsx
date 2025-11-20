import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Appnavigator from './Navigator/Appnavigator';


export default function App() {
  

  return (
    
    <div style={{ padding: 20 }}>
    
<Appnavigator/>
   </div>
  );
}
