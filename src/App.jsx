import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import ContextProviders from "./context";
import Header from './components/Header'
import Home from './pages/Home'
import Footer from "./components/Footer";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import EmailVerification from "./auth/EmailVerification.jsx";
import NotFound from "./pages/NotFound";
import ForgetPassword from "./auth/ForgetPassword";
import ConfirmPassword from "./auth/ConfirmPassword";
import Collegesnuniversities from "./pages/Collegesnuniversities";



function App() {
  return (<>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/SignUp' element={<SignUp/>} />
        <Route path='/auth/SignIn' element={<SignIn/>} />
        <Route path='/auth/verification' element={<EmailVerification/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/auth/forget-Password' element={<ForgetPassword/>} />
        <Route path='/auth/reset-password' element={<ConfirmPassword/>} />
        <Route path='/Collegesnuniversities' element={<Collegesnuniversities/>} />
      </Routes>
    <Footer />
   
        
  </>)
}

export default App
