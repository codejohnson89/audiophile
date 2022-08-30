import { NavModalHeader } from './NavModalHeader';
import { NavModalBody } from './NavModalBody';
import { NavModalFooter } from './NavModalFooter';



export function NavModal(props) {
  return (<div className="modal-dialog">
    <div className="modal-content">
      <NavModalHeader closeModal={props.closeModal} cartCount={props.cartCount}></NavModalHeader>
      <NavModalBody cartCount={props.cartCount} products={props.products}></NavModalBody>
      <NavModalFooter closeModal={props.closeModal} totalPrice={props.totalPrice}></NavModalFooter>
    </div>
  </div>);
}
