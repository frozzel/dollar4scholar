import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';
import PureCounter from "@srexi/purecounterjs";



const Breadcrumbs = () => {
    useEffect(() => {
        new PureCounter()
    
       }, [])

    return (
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="breadcrumb-hero">
          <div className="container">
            <div className="breadcrumb-hero">
              <h2>Dashboard</h2>
              {/* <p>Contact Us</p> */}
            </div>
          </div>
        </div>
      </section>
    );
  };

const Dashboard = () => {
  return (
    <main id="main">
    <Breadcrumbs />
   <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active"><a aria-current="page">Dashboard</a></li>
                
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid mx-auto" style={{ width: '150px' }} />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2 ">
                  <Button type="button" className="getstarted2 " variant="outline-*" style={{textDecoration: 'none', outline: "none"}}>edit</Button>
                  {/* <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    <h5 className='my-3 text-center'>Wallet</h5>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    
                  <i className="bi bi-coin " style={{ color: '#94c045',  fontSize: 36}} ></i>
                    <p className="mb-0" style={{color: "#94c045", fontSize: 36}}>$22.00</p>
                  </li>
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Birth date</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">May 11, 1999</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Home Town</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">School Attending</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Georgia Tech</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Buy In!</span> Current Pot Status</p>
                    <section id="about" className="about" style={{padding: 0}}>
    <div className="">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-4">
                <i className="bi bi-coin"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>This Weeks Pot</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-4">
                <i className="bi bi-clock"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>Time left to enter</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-6 ">
              <div className="count-box py-4">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                <p>Countdown</p>
              </div>
            </div>
            {/* Add more count boxes as needed */}
          </div>
        </div>
      </div>
      </div>
      </section>
                    {/* <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> */}
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </main>
  );
}

export default Dashboard;
