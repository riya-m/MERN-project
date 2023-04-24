import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import User1 from "./components/user1.component";
import User2 from "./components/user2.component";
import User3 from "./components/user3.component";
import User4 from "./components/user4.component";
import User5 from "./components/user5.component";

function App() { 
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar/> 
        <br/>
        <Routes>
          <Route path="/" exact element={<User1/>}/>
          <Route path="/user2" element={<User2/>}/>
          <Route path="/user3" element={<User3/>}/>
          <Route path="/user4" element={<User4/>}/>
          <Route path="/user5" element={<User5/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
