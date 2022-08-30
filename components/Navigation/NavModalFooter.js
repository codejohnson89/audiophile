import Link from 'next/link';

/**
 * It renders a div with a class of modal-footer, which contains a div with a class of total, which
 * contains a p tag and a span tag, which contains the text "total" and the total price of the items in
 * the cart, respectively, and a button with a class of btn btn-custom-orange checkout-btn, which
 * contains the text "checkout"
 * @param props - an object that contains the following properties: totalPrice 
 * @returns A div with a class of modal-footer.
 */
export function NavModalFooter(props) {
  return (<div className="modal-footer">
    <div className='total'>
      <p>total</p>
      <span>$ {props.totalPrice}</span>
    </div>
    <Link href="/checkout"><button  type="button" className="btn btn-custom-orange checkout-btn" data-bs-dismiss="modal">checkout</button></Link>
  </div>);
}
