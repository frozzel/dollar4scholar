import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from "./components/Footer";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";


function App() {
  return (<>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/SignUp' element={<SignUp/>} />
        <Route path='/auth/SignIn' element={<SignIn/>} />
      </Routes>
    <Footer />
        
  </>)
}

export default App
