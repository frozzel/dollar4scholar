import React, { useState, useEffect } from "react";
import {Navigate} from "react-router-dom";
import { getSessionStatus } from "../api/scholarship";


const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
  
    const fetchSession = async (sessionId) => {
      const data = await getSessionStatus(sessionId);
      setStatus(data.status);
      setCustomerEmail(data.customer_email);
    }
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      fetchSession(sessionId);
    }, []);
  
    if (status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (<main id="main" style={{marginTop: "200px"}}>
  
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </section>
        </main>
      )
    }
  
    return null;
  }



export default Return;