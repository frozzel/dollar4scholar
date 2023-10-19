import React, { useState, useEffect } from 'react';
import PureCounter from "@srexi/purecounterjs";
import { getCurrentPot } from '../api/scholarship';


const CountdownTimer = ({size}) => {
    const [pot, setPot] = useState();
    // get current pot amount
    const fetchPot = async () => {
      const {error, scholarship} = await getCurrentPot();
      if (error) return updateNotification("error", error);
      
      if (scholarship.pot !== undefined || pot !== 0) {
        setPot(scholarship.pot.toLocaleString('en-US'));
    };
    
    }
    useEffect( () => {
         fetchPot();
    }, [pot])

  const targetDay = 0; // 0 represents Sunday
  const targetHour = 16; // 12pm //change for daylight savings
  const targetMinute = 0; // 0 minutes
 
  let targetDate = new Date();
  targetDate.setHours(targetHour, targetMinute, 0, 0);
  targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset());
  targetDate.setDate(targetDate.getDate() + ((targetDay + 7 - targetDate.getDay()) % 7));

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
        new PureCounter();
        }
        , [])


//   if (pot === undefined || pot === 0) return (<>Loading...</>) 
//   else 
  return (
    <div>
      { timeLeft.days > 0 ? (<>
                            {/* <section id="about" className="about justify-content-between "  style={{padding: 0}}> */}
                            <div className=" justify-content-between " >
                            <div className="row justify-content-center" >
                                <div className={size}>
                                <div className="row justify-content-center" >
                                    <div className="col-lg-4 col-md-5 col-6 text-center">
                                    <div className="count-box py-4 text-center">
                                        <i className="bi bi-coin text-center"></i>
                                        <span>{pot}</span>
                            
                                                                                <p>This Weeks Pot</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-6 text-center">
                                    <div className="count-box py-4 text-center">
                                        <i className="bi bi-clock text-center"></i>
                                        <span data-purecounter-start="0" data-purecounter-end={timeLeft.days} className="purecounter">0</span>
                                        <p>Days Remaining</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-6 text-center">
                                    <div className="count-box py-4 text-center">
                                        <i className="bi bi-journal-richtext text-center"></i>
                                        <span data-purecounter-start="0" data-purecounter-end={timeLeft.hours} className="purecounter">0</span>
                                        <p>Hours Remaining</p>
                                    </div>
                                    </div>
                                    {/* <div className=" text-center mb-2">
                                        <Button className="getstarted2" variant="outline-*">Buy In</Button>
                                    </div> */}
                                    {/* Add more count boxes as needed */}
                                </div>
                                </div>
                            </div>
                            </div>
                        {/* </section> */}
                        </>
      ) : (<>
        {/* <section id="about" className="about justify-content-between "  style={{padding: 0}}> */}
        <div className=" justify-content-between " >
        <div className="row justify-content-center" >
            <div className="col-lg-12">
            <div className="row justify-content-center" >
                <div className="col-lg-4 col-md-5 col-6 text-center">
                <div className="count-box py-4 text-center">
                    <i className="bi bi-coin text-center"></i>
                    <span>{pot}</span>                    <p>This Weeks Pot</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-5 col-6 text-center">
                <div className="count-box py-4 text-center">
                    <i className="bi bi-clock text-center"></i>
                    <span data-purecounter-start="0" data-purecounter-end={timeLeft.days} className="purecounter">0</span>
                    <p>Days Remaining</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-5 col-6 text-center">
                <div className="count-box py-4 text-center">
                    <i className="bi bi-journal-richtext text-center"></i>
                    <span data-purecounter-start="0" data-purecounter-end={timeLeft.hours > 0 ? `${timeLeft.hours}` : `${timeLeft.minutes} `} className="purecounter">0</span>
                    <p>{timeLeft.hours > 0 ? `Hours Left` : `Minutes Left` }</p>
                </div>
                </div>
   
            </div>
            </div>
        </div>
        </div>
    {/* </section> */}
    </>
      )}
    </div>
    
  )
    
  
}; 

export default CountdownTimer;
