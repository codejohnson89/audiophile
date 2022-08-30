import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../public/assets/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import { NavModal } from './NavModal';

ReactModal.setAppElement('#__next')

export default function NavigationBar() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.cart.value);
  const cartCount = useSelector((state) => state.cart.count);
  let [totalPrice, setTotalPrice] = useState(0);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  /**
   * It takes the quantity of each product and multiplies it by the price of each product, then adds all
   * of those numbers together to get the total price
   * @returns The total price of the products in the cart.
   */
  function total() {
    let arr = []

    for (let product of products) {
      arr.push(product.quantity * product.productPrice)
    }

    const sum = arr.reduce(function (a, b) {
      return a + b;
    }, 0);


    totalPrice = sum;
    setTotalPrice(sum)
  }

  function updateQuantity(count) {
    product.quantity++
    console.log('update ', count)
  }
  return (
    <>
      <Navbar expand="lg">
        <div className={['container', 'navContainer'].join(' ')}>
          <Navbar.Brand href="/">
            <Image src={logo} alt="Home image" />
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
          <div className='cart' onClick={openModal}></div>
        </div>
        <div className='outline'></div>
      </Navbar>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={total}
        id='cartModal'
        preventScroll={true}
        className="animate__animated animate__slideInRight animate__delay-300ms"
      >
        <NavModal closeModal={closeModal} openModal={openModal} products={products} cartCount={cartCount} totalPrice={totalPrice}></NavModal>
      </ReactModal>
    </>
  )
}