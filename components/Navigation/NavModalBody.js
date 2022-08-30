import Image from 'next/image';
import QuantityBox from '../QuantityBox';
import cart from '../../public/assets/shared/desktop/icon-cart.svg';

/**
 * It returns a div with a class of modal-body. Inside that div, it returns a div with a class of empty
 * or products. If the cartCount is 0, it returns a div with a class of emptyCart. If the cartCount is
 * greater than 0, it returns a ul with a list of products
 * @param props - This is the props object that is passed to the component.
 * @returns A div with a class of modal-body.
 */
export function NavModalBody(props) {
  return (<div className="modal-body">

    <div className={!props.cartCount ? 'empty' : 'products'}>
      {!props.cartCount ? <div className='emptyCart'>
        <div className='imageContainer'>
          <Image src={cart} alt="cart icon" width={75} height={75} />
        </div>
        <div className='content'>
          <p>Your cart is empty</p>
        </div>
      </div> : <ul>
        {props.products.map(product => {
          return <li key={props.cartCount + 1}>
            <div className='left'>
              <div className='image'>
                <Image src={product.image} alt={product.productName} width={64} height={64} />
              </div>
              <div className='productNamePrice'>
                <span className='name'>{product.productName}</span>
                <span className='price'>$ {product.productPrice}</span>
              </div>
            </div>
            <div className='right'>
              <QuantityBox count={product.quantity} />
            </div>
          </li>;
        })}
      </ul>}
    </div>
  </div>);
}
