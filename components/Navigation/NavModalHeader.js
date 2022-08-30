
/**
 * This function returns a div with a button and an h6 tag
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns A div with a button and an h6.
 */
export function NavModalHeader(props) {
  return (
  <div className="modal-header">
    <button onClick={props.closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <h6 className="heading-h6">Cart ({props.cartCount})</h6>
  </div>
  );
}
