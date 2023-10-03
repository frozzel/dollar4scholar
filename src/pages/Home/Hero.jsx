// Note: Hero component for Home page
import { useEffect } from 'react';
import backgroundImage from '../../assets/img/hero-bg.jpg';
import AOS from 'aos';

export default function Hero() {
  useEffect(() => {
    AOS.init({duration: 2000, once: true});
  }, [])
  
  return (<>
    <section id="hero" style={{ 
      backgroundImage: `url(${backgroundImage})` 
    }}>
 
        <div className="hero-container" data-aos="fade-up">
        
          <h1>Add a Play To Your Financial Aid!</h1>
          <form action="" method="post">
            <input type="email" placeholder="Student Email" name="email" />
            <input type="submit" value="Enter to win this week’s pot!" />
          </form>
          <a href="#" className="btn-get-started scrollto">Donate to the pot!</a>
        </div>
   
      </section>
      </>
  )
}


  