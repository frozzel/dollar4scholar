// Desc: Home page for the app
import Hero from './Home/Hero.jsx'
import About from './Home/About.jsx'
import { useNotification } from "../hooks";
import NotVerified from '../components/NotVerified.jsx';



export default function Home() {

  const { notification } = useNotification();
  return (<>
     <NotVerified />
      <Hero />


  <main id="main">
  <About />

  </main>
  

  </>)
}
