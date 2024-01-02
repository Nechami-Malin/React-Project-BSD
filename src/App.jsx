import { useState } from 'react'
import './App.css'
import PageNFound from "./commponent/pageNFound";
import Admin from './commponent/admin';
import Meeting from "./commponent/meeting";
import Services from "./commponent/services";
import User from './commponent/User';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import BusinessStore from './AppStore/businessStore';
import serviceStore from './AppStore/serviceStore';

function App() {

  useEffect(()=>{
      BusinessStore.initBusinessData();
  },[])

  return (
    
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<User />} errorElement={<PageNFound pg={"User"} />} />
         <Route path="admin" element={<Admin />} >
           <Route path="services" element={<Services />} />
           <Route path="meeting" element={<Meeting />} />
         </Route>
       </Routes>
     </BrowserRouter>

    
  )
}
export default App
