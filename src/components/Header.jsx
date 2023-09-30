// import logo from '/assets/img/Dollar4ScholarLogo.png'
// import './header.css'

export default function Header() {
  return (<>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        {/* <h1 className="text-light"><a href="index.html">Dollar4Scholar</a></h1> */}
        <a href="index.html"><img src='./assets/img/Dollar4Scholar-Logo.png' alt="" className="img-fluid"/></a>

        </div>

        <nav id="navbar" className="navbar">
            <ul>
                <li className="dropdown"><a href="#"><span>Partners & Affiliates</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                    <li><a href="about.html">Colleges & Universities</a></li>
                    <li><a href="team.html">Investors</a></li>
                </ul>
                </li>
                <li className="dropdown"><a href="#"><span>How It Works</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                    <li><a href="about.html">For Donors</a></li>
                    <li><a href="team.html">For Students</a></li>
                </ul>
                </li>
                <li><a href="#">Donor Spotlight</a></li>
                <li><a href="#">Contact Us</a></li>

                <li><a className="getstarted" href="#">Login/Sign Up</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
         </nav>

    </div>
    </header>
  </>

  )
}
