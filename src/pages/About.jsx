import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cau from '../assets/img/CAUlogo.png';
import lsu from '../assets/img/lsulogo.png';
import columbia from '../assets/img/columbialogo.png';
import harvard from '../assets/img/Harvardlogo.png';
import spelman from '../assets/img/spelmanlogo.png';
import temple from '../assets/img/Templelogo.png';
import uh from '../assets/img/uhlogo.png';
import mh from '../assets/img/Mhouselogo.jpeg';
import { Pagination } from 'swiper/modules';
import CountdownTimer from '../components/Counter.jsx';
import { Container } from 'react-bootstrap';  
import videoPlaceHolder from '../assets/img/webpic.png'
import GLightbox from 'glightbox';
import { getCurrentPot } from '../api/scholarship';


SwiperCore.use([Pagination]);

const AboutSection = ({pot, date}) => {
  useEffect(() => {
    AOS.init({duration: 1000, once: false});
   
  }
    , []);

  useEffect(() => {
      GLightbox();
    }, [])

  

  return ( <>

<section id="about" className="about justify-content-between " data-aos="fade-up" data-aos-delay="400" style={{paddingBottom: "4rem" }} >
    <Container className="container " >
    <CountdownTimer size={"col-lg-6"} pot={pot} date={date}  />

      <div className="row">
        <div className="col-lg-6 video-box align-self-baseline position-relative">
          <img src={videoPlaceHolder } className="img-fluid" alt="" />
          <a href="https://www.youtube.com/watch?v=RuZglxY4EuM" className="glightbox play-btn mb-4"></a>
        </div>
        <div className="col-lg-6 pt-3 pt-lg-0 content">
          <h3>Check Out This Video to See How it Works!</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            {/* Add more list items as needed */}
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </Container>
  </section>
  </>

  )
}



const Breadcrumbs = () => {
  
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>About</h2>
            <p>The University Powerball will provide scholarship opportunities for students currently enrolled in an accredited college or University. The way to enter to win the weekly raffle is by submitting a payment of $1 along with school credentials and an email address to be entered the lottery. The earning of the week will be raffled off through a randomized system to generate a winner. The winners name will then appear on the site with a “Congratulations, you’re this week’s WINNER!!!” </p>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>About</li>
        </ol>
      </div>
    </section>
  );
};


const WorkProcessSection = () => {

  useEffect(() => {
    AOS.init({duration: 2000, once: true});
   
  }
    , []);

  return (
    <section id="work-process" className="work-process" >
      <div className="container">
        <div className="section-title" data-aos="fade-right">
          <h2>Work Process</h2>
          <p>This powerball is open for College and University student Country wide. With access to an edu adminsitered email address you are qualified to win the weekly pot. The pot submissions will be sorted through and pulled weekly for a winner. Keep an eye out for your emails! You may have the luck of the draw.</p>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
            <img src={lsu} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left">
            <div className="fst-italic">
                <h3>Enter Student Email</h3>
              <ul>
                <li><i className="bx bx-check-double"></i> The email address must be from an accredited College or University ending in .edu to be accepted into the drawing.</li>
                <li><i className="bx bx-check-double"></i> Participants must be enrolled in an Accredited College or University</li>
                <li><i className="bx bx-check-double"></i> Participants must have access to this email address</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
            <img src={columbia} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>Create Student Profile</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
            <img src={mh} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-left">
            <h3>Enter to win!!!</h3>
            <ul>
              <li><i className="bi bi-check"></i> Test your luck at the Drawing</li>
              <li><i className="bi bi-check"></i> Enter your Dollar you Scholar</li>
              <li><i className="bi bi-check"></i> Wait for an email confirmation of your submission.</li>
            </ul>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
            <img src={cau} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>Check for the Winner</h3>
            <p className="fst-italic">
              The Winner will appear on the site every Sunday at 12 noon! 
            </p>
            <p>
                <ul>
                    <li><i className="bx bx-check-double"></i> Check your email to see if you were this weeks lucky winner</li>
                    <li><i className="bx bx-check-double"></i> Congratulations to our Winner!!!</li>
                    <li><i className="bx bx-check-double"></i> If you were not this weeks lucky winner, try your hand for next week!!!</li>
                    <li><i className="bx bx-check-double"></i> Check-out our scholarship page for govenment funded scholarships!</li>
                    <li><i className="bx bx-check-double"></i> Lets Find a Way or Make one for your academic aspirations to become reality</li>
                    <li><i className="bx bx-check-double"></i> The only way to lose is to stop trying, Try Again! </li>
                  </ul>
                  <h3>You Got This!!!</h3>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
    const clients = [
      cau,
      mh,
      columbia,
      harvard,
      uh,
      lsu,
      temple,
      spelman
    ];
  
    useEffect(() => {
      AOS.init({ duration: 2000, once: true });
    }, []);
  
    return (
      <>
        <section id="clients" className="clients">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Clients</h2>
              <p>Accredited Institutions we Partner with</p>
            </div>
            <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <Swiper
              spaceBetween={150}
              slidesPerView={6}
              pagination={{ clickable: true }}
              
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  <img src={client} className="img-fluid" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            </div>
          </div>
        </section>
      </>
    );
  };

const About = () => {
  function getPreviousSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysToSunday = dayOfWeek === 0 ? 7 : dayOfWeek;
    const millisecondsInDay = 24 * 60 * 60 * 1000;
  
    const previousSunday = new Date(today.getTime() - (daysToSunday * millisecondsInDay));
    previousSunday.setHours(11, 59, 0, 0);
  
    return previousSunday;
  }

  const [pot, setPot] = useState(0);
  const [date, setDate] = useState(getPreviousSunday());

  const fetchPot = async () => {
    const {error, scholarship} = await getCurrentPot();
    if (error) return updateNotification("error", error);
    const dateStarted = new Date(scholarship.dateStarted); // Convert to valid date format
    if(scholarship.pot !== undefined) {
      setPot(scholarship.pot);
    }
    if(dateStarted !== undefined) {
      setDate(dateStarted);
    }
    // setDate(dateStarted);
    // setPot(scholarship.pot);
  
  }
  useEffect( () => {
     
       fetchPot();
  }, [])

  return (
    <main id="main" >
      <Breadcrumbs />
      <AboutSection pot={pot} date={date}/>
      <WorkProcessSection />
      <ClientsSection />
    </main>
  );
};

export default About;
