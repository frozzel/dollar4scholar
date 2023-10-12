import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import PureCounter from "@srexi/purecounterjs";
import { useAuth } from "../hooks";
import NotVerified from '../components/NotVerified';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotification } from "../hooks";
import { getProfile } from "../api/user";






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
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const { authInfo } = useAuth();
    const { isLoggedIn } = authInfo;
    const isVerified = authInfo.profile?.isVerified;
    const {userId} = useParams();
    const { updateNotification } = useNotification();
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const {notification} = useNotification();
    const navigate = useNavigate();
    const test = authInfo.profile?.following?.includes(userId);
    const [following, setFollowing] = useState(test);

    const fetchProfile = async () => {
        const { error, user } = await getProfile(userId);
          if (error) return updateNotification("error", error);
  
          setUser(user);
          
    };

    useEffect(() => {
        if (userId)fetchProfile() && window.scrollTo(0, 0);
    }, [userId]);

    useEffect(() => {
        setMessage(notification)
    } , [notification])

    


    if (!isLoggedIn) {
        return (
            <main id="main">
          <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <p className="text-muted">
              Please Login
            </p>
          </div>
            </main>
        );
      }
    if (!isVerified) {
        return (
            <main id="main">
                <NotVerified />
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <p className="text-muted">
                    Please Verify your account
                </p>
            </div>
            </main>
        );
    }

    const { name, avatar,  major, address, email, phone, birth, school, wallet, type} = user;
    
    


  return (
    <main id="main">
                  <div className="text-danger text-center">{message}</div>

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
                {avatar ? (
                    <img src={avatar} alt={name} className="rounded-circle img-fluid mx-auto" style={{ width: '150px' }} />
                ) :(
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid mx-auto" style={{ width: '150px' }} />

                )
                }
                <h5 className="my-3">{name}</h5>
                <p className="text-muted mb-1">{major}</p>
                <p className="text-muted mb-4">{address}</p>
                <div className="d-flex justify-content-center mb-2 ">
                  <Button type="button" className="getstarted2 " variant="outline-*" style={{textDecoration: 'none', outline: "none"}}>Edit</Button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    <h5 className='mt-3 text-center'>Wallet</h5>
                  <li className=" d-flex justify-content-between align-items-center px-4 ">
                    
                  <i className="bi bi-coin " style={{ color: '#94c045',  fontSize: 32}} ></i>
                    <p className="" style={{color: "#94c045", fontSize: 32}}>${wallet}</p>
                  </li>
                  <li className=" d-flex justify-content-between align-items-center px-2">
                  <Button className="getstarted2 " variant="outline-*">Add Funds</Button>
                    </li>
 
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
                    <p className="text-muted mb-0">{name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Birth date</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{birth}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Home Town</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">School Attending</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{school}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="text-center "> Current Pot Status</h5>
                    
                    <section id="about" className="about justify-content-between "  style={{padding: 0}}>
                        <div className=" justify-content-between " >
                        <div className="row justify-content-center" >
                            <div className="col-lg-12">
                            <div className="row justify-content-center" >
                                <div className="col-lg-4 col-md-5 col-6 text-center">
                                <div className="count-box py-4 text-center">
                                    <i className="bi bi-coin text-center"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                                    <p>This Weeks Pot</p>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-5 col-6 text-center">
                                <div className="count-box py-4 text-center">
                                    <i className="bi bi-clock text-center"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                                    <p>Time left to enter</p>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-5 col-6 text-center">
                                <div className="count-box py-4 text-center">
                                    <i className="bi bi-journal-richtext text-center"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                                    <p>Countdown</p>
                                </div>
                                </div>
                                <div className=" text-center mb-2">
                                    <Button className="getstarted2" variant="outline-*">Buy In</Button>
                                </div>
                                {/* Add more count boxes as needed */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    
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
