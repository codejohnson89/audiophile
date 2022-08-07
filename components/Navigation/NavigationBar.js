import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../public/assets/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar () {
    return (
        <>
          <Navbar expand="lg">
            <div className={['container', 'navContainer'].join(' ')}>
              <Navbar.Brand href="#home">
                  <Image src={logo} alt="Home image"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className='nav-link' href="/"><a className="nav-link">Home</a></Link>
                  <Link href="/categories/headphones"><a className="nav-link">Headphones</a></Link>
                  <Link href="/categories/speakers"><a className="nav-link">Speakers</a></Link>
                  <Link href="/categories/earphones"><a className="nav-link">Earphones</a></Link>
                </Nav>
              </Navbar.Collapse>
              <div className='cart'>Cart</div>
            </div>
            <div className='outline'></div>
          </Navbar>
        </>
    )
}