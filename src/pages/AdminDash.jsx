import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from "../hooks";
import NotVerified from '../components/NotVerified';
import { useParams } from 'react-router-dom';
import { useNotification } from "../hooks";
import { getProfile } from "../api/user";
import UserUploadDonor from "../components/UserUploadDonor";
import UserWallet from '../components/UserWallet';
import AOS from 'aos';
import UserDonate from '../components/UserDonate';
import Counter from '../components/Counter';
import {CgProfile} from "react-icons/cg";
import {FaUserGraduate} from "react-icons/fa";
import {BsCoin} from "react-icons/bs";
import admin from '../assets/img/admin.jpg';
import client1 from '../assets/img/clients/client-1.png';
import client2 from '../assets/img/clients/client-2.png';
import client3 from '../assets/img/clients/client-3.png';
import client4 from '../assets/img/clients/client-4.png';
import client5 from '../assets/img/clients/client-5.png';
import client6 from '../assets/img/clients/client-6.png';
import women from '../assets/img/women.png';



const Breadcrumbs = () => {
    return (
      <section id="breadcrumbs" className="breadcrumbs" >
        <div className="breadcrumb-hero">
          <div className="container">
            <div className="breadcrumb-hero">
              {/* <h2>Dashboard</h2> */}
              {/* <p>Donor</p> */}
            </div>
          </div>
        </div>
      </section>
    );
  };

const AdminDash = ({pot, date}) => {
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
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [walletState, setWallet] = useState(null);
    const [contribution, setContribution] = useState([]);
    const [showDonateModal, setShowDonateModal] = useState(false);
    const [donateState, setDonate] = useState(null);
  

    const fetchProfile = async () => {
        const { error, user } = await getProfile(userId);
          if (error) return updateNotification("error", error);
          setContribution(...user.contribution);
          setUser(user);
    };

    const handleOnEditClick = () => {
        const { id, name, address, phone, avatar} = user;
        
        setSelectedUser({
          id,
          name,
          address,
          phone,
          avatar,
        });
  
        setShowEditModal(true);
      };
      const hideEditModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
      };
      //add donate funds on click
      const handleOnDonateClick = () => {
        const { id, name, wallet} = user;
        setDonate({
          id,
          name,
          wallet,
        })
        setShowDonateModal(true);
      };
      const hideDonateModal = () => {
        setShowDonateModal(false);
        setDonate(null);
      };

      //add wallet funds on click
      const handleOnEditClickWallet = () => {
        const { id, name, wallet} = user;
        setWallet({
          id,
          name,
          wallet,
        })
        setShowWalletModal(true);
      };

      const hideWalletModal = () => {
        setShowWalletModal(false);
        setWallet(null);
      };

      //update wallet funds on finish
      const handleOnWalletUpdate = (updatedWallet) => {
        
        setUser(prevUser => {
          return {
            ...prevUser,
            wallet: updatedWallet,
          };
        });
      };
  
      const handleOnUserUpdate = (updatedUser) => {
        const updatedFields = {
          name: updatedUser.name,
          address: updatedUser.address,
          avatar: updatedUser.avatar,
          phone: updatedUser.phone,
        };
      
        setUser(prevUser => {
          return {
            ...prevUser,
            ...updatedFields,
          };
        });
      };

      // handle on donate update
      const handleOnDonateUpdate = (updatedDonate, contributions) => {
        setUser(prevUser => {
          return {
            ...prevUser,
            wallet: updatedDonate,
            contribution: [...prevUser.contribution, contributions]
          };
        });
        setContribution([...contribution, contributions])
      };


    useEffect(() => {
        if (userId)fetchProfile() && window.scrollTo(0, 0);
    }, [userId]);

    useEffect(() => {
        setMessage(notification)
    } , [notification])

    useEffect(() => {
      AOS.init({duration: 1000, once: true});
     
    }
      , []);


    if (!isLoggedIn) {
        return (
            <main id="main">
          <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="text-danger text-center">{message}</div>

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
            <div className="text-danger text-center">{message}</div>

                <p className="text-muted">
                    Please Verify your account or Log back in
                </p>
            </div>
            </main>
        );
    }

  const { name, avatar, address, phone, wallet } = user;





  return (
    <main id="main">
    <Breadcrumbs />
   <section style={{ backgroundColor: '#eee', paddingBottom: '0' }}>
      <div className="container py-4" data-aos="fade-up">
        <div className="text-danger text-center">{message}</div>
        <div className="row">
        <StatisticsSection />
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center p-0">
            
                    <img src={admin} alt="admin" className="rounded-rectangle img-fluid mx-auto" style={{ width: '250px', objectFit: 'cover', backgroundColor: '#eee'}} />

              </div>
            </div>
    
            <ResentDonations />
     
          </div>
          <div className="col-lg-8">
            
            
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="text-center "> Current Pot Status</h5>
                    
                    <section id="about" className="about justify-content-between "  style={{padding: 0}}>
                      <Counter size={"col-lg-12"} pot={pot} date={date}/>
                        
                    </section>
                    
                  </div>
                </div>
              </div>
             
             <ActiveWinners />
            
          

            </div>
          </div>
          
        </div>
      </div>
    {/* //wallet modal */}
    <UserWallet
        visible={showWalletModal}
        initialState={walletState}
        onSuccess={handleOnWalletUpdate}
        onClose={hideWalletModal}
      />

      <UserUploadDonor
        visible={showEditModal}
        initialState={selectedUser}
        onSuccess={handleOnUserUpdate}
        onClose={hideEditModal}
      />
          <UserDonate
        visible={showDonateModal}
        initialState={donateState}
        onSuccess={handleOnDonateUpdate}
        onClose={hideDonateModal}
      />
    </section>
    </main>
  );




}



function StatisticsSection() {
  return (
    <div className="container-fluid">
      <section className='' style={{padding: 0}}>

        <div className="row">
          <div className="col-xl-4 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <CgProfile className="text-info fa-3x me-4" style={{ fontSize: "3.2rem",  }} />
                    </div>
                    <div>
                      <h4>Total Users</h4>
                      <p className="mb-0">Students & Donors</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">169,158</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <FaUserGraduate className=" fa-3x me-4" style={{ fontSize: "3.2rem", color: "#0063aa" }} />
                    </div>
                    <div>
                      <h4>Students</h4>
                      <p className="mb-0">Student Users</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">84,695</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <BsCoin className=" fa-3x me-4" style={{ fontSize: "3.2rem", color: "#94c045" }} />
                    </div>
                    <div>
                      <h4>Donors</h4>
                      <p className="mb-0">Donor Users</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">84,695</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </section>
    </div>
  );
}

const ResentDonations = () => {
    return (
        <div className="card mb-4 mb-lg-0">
        <div className="mt-3 text-center">
            <h5 className="">Recent Donors</h5>
        </div>
        <hr></hr>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush rounded-3">
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <img className="fas fa-globe fa-lg text-warning" src={client1} style={{ width: '50px', objectFit: 'cover', }} ></img>
            <p className="mb-0">Myob</p>
            <p className="mb-0 " style={{color: '#94c045'}}>$300</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <img className="fas fa-globe fa-lg text-warning" src={client2} style={{ width: '50px', objectFit: 'cover', }} ></img>
          <p className="mb-0">Belimo</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$150</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <img className="fas fa-globe fa-lg text-warning" src={client3} style={{ width: '50px', objectFit: 'cover', }} ></img>
          <p className="mb-0">Life Groups</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$650</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <img className="fas fa-globe fa-lg text-warning" src={client4} style={{ width: '50px', objectFit: 'cover', }} ></img>
          <p className="mb-0">Lilly</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$950</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <img className="fas fa-globe fa-lg text-warning" src={client5} style={{ width: '50px', objectFit: 'cover', }} ></img>
          <p className="mb-0">Citrus</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$400</p>
          </li>
        </ul>
      </div>
    </div>
    )
}
const ActiveWinners = () => {
    return (
        <div className="col-md-16" >
        <div className="card mb-4 mb-lg-0" >
        <div className="mt-3 text-center" >
            <h5 className="">Winners</h5>
        </div>
      <hr></hr>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush rounded-3">
        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <p className="mb-0">Image</p>
          <p className="mb-0">Name</p>
          <p className="mb-0">Pot Date</p>
          <p className="mb-0 ">Status</p>
          <p className="mb-0 ">Total</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor: '#f4f8ec'}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="fas fa-globe fa-lg text-warning rounded-circle img-fluid " style={{ width: '40px', objectFit: 'cover', }} />            
          <p className="mb-0">John Smith</p>
          <p className="mb-0">10/15/23</p>
          <p className="mb-0 ">Open</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$10,000</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3" >
          <img src={women} alt="avatar" className="fas fa-globe fa-lg text-warning rounded-circle img-fluid " style={{ width: '40px', objectFit: 'cover',  }} />            
          <p className="mb-0">Jane Doe</p>
          <p className="mb-0">10/15/23</p>
          <p className="mb-0 ">Open</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$7,000</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor: '#f4f8ec'}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="fas fa-globe fa-lg text-warning rounded-circle img-fluid " style={{ width: '40px', objectFit: 'cover', }} />            
          <p className="mb-0">John Smith</p>
          <p className="mb-0">10/15/23</p>
          <p className="mb-0 ">Open</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$10,000</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
          <img src={women} alt="avatar" className="fas fa-globe fa-lg text-warning rounded-circle img-fluid " style={{ width: '40px', objectFit: 'cover', }} />            
          <p className="mb-0">Jane Doe</p>
          <p className="mb-0">10/15/23</p>
          <p className="mb-0 ">Open</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$7,000</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor: '#f4f8ec'}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="fas fa-globe fa-lg text-warning rounded-circle img-fluid " style={{ width: '40px', objectFit: 'cover', }} />            
          <p className="mb-0">John Smith</p>
          <p className="mb-0">10/15/23</p>
          <p className="mb-0 ">Open</p>
          <p className="mb-0 " style={{color: '#94c045'}}>$10,000</p>
          </li>
          
        </ul>
      </div>
    </div>
    </div>
    )
}




export default AdminDash;
