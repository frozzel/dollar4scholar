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



function App() {
  return (<>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/SignUp' element={<SignUp/>} />
        <Route path='/auth/SignIn' element={<SignIn/>} />
        <Route path='/auth/verification' element={<EmailVerification/>} />
      </Routes>
    <Footer />
   
        
  </>)
}

export default App
