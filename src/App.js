import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './Components/Layout';
import Home from './Components/Homes/Home';
import Login from './Components/Admins/Logins/Login';
import Users from './Components/Admins/User/Users';
import Signup from './Components/Admins/Signups/Signup';
import Service from './Components/Admins/Services/Service';
import Contact from './Components/Admins/Contacts/Contact';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route  path="/Signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route exact path="/Home" element={(<Layout><Home /></Layout>)} />
      </Routes>
      <Routes>
        <Route exact path="/Users" element={(<Layout><Users /></Layout>)} />
      </Routes>
      <Routes>
        <Route exact path="/Service" element={(<Layout><Service /></Layout>)} />
      </Routes>
      <Routes>
        <Route exact path="/Contact" element={(<Layout><Contact /></Layout>)} />
      </Routes>
      
        </BrowserRouter>
  );
}


export default App;
