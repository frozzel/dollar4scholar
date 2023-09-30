import { Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from "./components/Footer";

function App() {
  return (<>
     <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     
    <Footer />
        </>)
}

export default App
