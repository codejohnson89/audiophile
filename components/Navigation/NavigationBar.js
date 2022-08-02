import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../public/assets/shared/desktop/logo.svg';
import Image from 'next/image';

export default function NavigationBar () {
    return (
        <>
          <Navbar expand="lg">
            <div className={['container', 'navContainer'].join(' ')}>
              <Navbar.Brand href="#home">
                  <Image src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Headphones</Nav.Link>
                  <Nav.Link href="#link">Speakers</Nav.Link>
                  <Nav.Link href="#link">Earphones</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className='cart'>Cart</div>
              <div className='outline'></div>
            </div>
          </Navbar>
        </>
    )
}