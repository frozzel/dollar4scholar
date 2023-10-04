import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/Dollar4Scholar-Logo.png';


export default function Header() {
  return (<>
      <header id="header" className="fixed-top d-flex align-items-center">
    <Navbar id="header" className="fixed-top justify-content-between" expand="lg">
      <div className="container d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/" className='logo'>
          <img
            src={logo}
            alt=""
            className="img-fluid logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"  />
        <Navbar.Collapse id="navbar" className='navbar justify-content-end'>
          <Nav className="ml-auto ">
            <NavDropdown title="Partners & Affiliates" id="partners-affiliates">
              <NavDropdown.Item href="/about">Universities</NavDropdown.Item>
              <NavDropdown.Item href="team.html">Investors</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="How It Works" id="how-it-works">
              <NavDropdown.Item href="about.html">For Donors</NavDropdown.Item>
              <NavDropdown.Item href="team.html">For Students</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Donor Spotlight</Nav.Link>
            
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link className='getstarted' href="/auth/signIn">Login/Sign Up</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </header>
  </>

  )
}
