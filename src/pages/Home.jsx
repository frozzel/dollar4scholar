// Desc: Home page for the app
import Footer from '../components/Footer'


export default function Home() {
  return (<>
    <section id="hero">
    <div className="hero-container" data-aos="fade-up">
      <h1>Add a Play To Your
        Financial Aid!</h1>
        <form action="" method="post">
          <input type="email" placeholder="Student Email" />
          <a href="#" className="btn-get-started scrollto">Enter to win this week’s pot!</a>
        </form>
        {/* <form action="" method="post">
          <input type="email" placeholder="Student Email" name="email"><input type="submit" value="Enter to win this week’s pot!">
        </form>
        <a href="#" class="btn-get-started scrollto">Donate to the pot!</a> */}
      {/* <!-- <h2>We are team of talented designers making websites with Bootstrap</h2> --> */}
    </div>
  </section>

  <main id="main">
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
                  <span data-purecounter-start="0" data-purecounter-end="27" className="purecounter">0</span>
                  <p>Time left to enter</p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-5 col-6 ">
                <div className="count-box py-5">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" className="purecounter">0</span>
                  <p>Countdown </p>
                </div>
              </div>
              </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 video-box align-self-baseline position-relative">
            <img src="assets/img/webpic.png" className="img-fluid" alt=""/>
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

  </main>
  

  </>)
}
