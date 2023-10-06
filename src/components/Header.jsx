import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/Dollar4Scholar-Logo.png';
import  NotificationProvider from '../context/NotificationProvider';

export default function Header() {
  return (<>
 
      <header id="header" className="header fixed-top d-flex align-items-center">
      <NotificationProvider>
<Navbar id="header" className="fixed-top" collapseOnSelect expand="lg" >
      <div className="container">
        <Navbar.Brand href="/" className='logo'>
          <img
            alt="Dollar 4 scholar logo"
            src={logo}
            className="d-inline-block align-top img-fluid logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className="mobile-nav-toggle" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav>
            <NavDropdown title="Partners & Affiliates" id="partners-dropdown">
              <NavDropdown.Item href="collegesnuniversities.html">Universities</NavDropdown.Item>
              <NavDropdown.Item href="investors.html">Investors</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="How It Works" id="how-it-works-dropdown">
              <NavDropdown.Item href="about.html">About</NavDropdown.Item>
              <NavDropdown.Item href="donor.html">For Donors</NavDropdown.Item>
              <NavDropdown.Item href="student.html">For Students</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Donor Spotlight</Nav.Link>
            <Nav.Link href="contact.html">Contact Us</Nav.Link>
            <Nav.Link className='getstarted' href="/auth/signIn">Login/Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </NotificationProvider>
    </header>
  </>

  )
}
