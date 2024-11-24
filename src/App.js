import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Update from './Component/Update';
import Create from './Component/Create';

export default function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
           <Route path='/update/:id' element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}
