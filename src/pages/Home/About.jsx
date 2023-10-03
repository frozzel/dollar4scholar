import {useEffect} from 'react';
import  videoPlaceHolder from '../../assets/img/webpic.png'
import PureCounter from "@srexi/purecounterjs";
import GLightbox from 'glightbox';

export default function About() {
  useEffect(() => {
   new PureCounter(),
    GLightbox();
  }, [])

    
    // const pot = 65;
  return ( <>

    <section id="about" className="about">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-5">
                <i className="bi bi-coin"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>This Weeks Pot</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-5">
                <i className="bi bi-clock"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>Time left to enter</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-5">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>Countdown</p>
              </div>
            </div>
            {/* Add more count boxes as needed */}
          </div>
        </div>
      </div>

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
    </div>
  </section>
  </>

  )
}

  