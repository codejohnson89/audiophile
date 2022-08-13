import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../public/assets/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import QuantityBox from '../QuantityBox';

ReactModal.setAppElement('#__next')

/**
 * It renders a navigation bar with a cart icon that opens a modal when clicked
 * @returns A React component
 */
export default function NavigationBar () {

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

    const sum = arr.reduce(function(a, b){
      return a + b;
  }, 0);

  console.log(sum)

   totalPrice = sum;
   console.log(totalPrice)
   setTotalPrice(sum)

  console.log('modal just open')
  }

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
              <div className='cart' onClick={openModal}></div>
            </div>
            <div className='outline'></div>
          </Navbar>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={total}
            id='cartModal'
          >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className='top'>
                      <h6 className="heading-h6">Cart ({cartCount})</h6>
                      <p className='removeAll'>remove all</p>
                    </div>
                    <div className='products'>
                      <ul>
                        {
                          products.map((product) => {
                            return <li key={product.productName}>
                              <div className='left'>
                                <div className='image'>
                                  <Image src={product.image} alt={product.productName} width={64} height={64}/>
                                </div>
                                <div className='productNamePrice'>
                                <span className='name'>{product.productName}</span>
                                <span className='price'>$ {product.productPrice}</span>
                                </div>
                              </div>
                              <div className='right'>
                                x{product.quantity}
                              </div>
                            </li>
                          })
                        }
                      </ul>
                    </div>
                    <div className='total'>
                      <p>total</p>
                      <span>$ {totalPrice}</span>
                    </div>
                  </div>
                  <div className="modal-footer">
                   <Link href="/checkout"><button onClick={closeModal} type="button" className="btn btn-custom-orange checkout-btn" data-bs-dismiss="modal">checkout</button></Link>
                  </div>
                </div>
              </div>
          </ReactModal>
        </>
    )
}