import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, addCart } from '../../DataManagement/features/cart/cartSlice';
import styles from './styles.module.css';

/**
 * This function is a custom hook that is used to add a product to the cart
 * @param props - this is the data that is passed down from the parent component
 * @returns A button that will add the product to the cart
 */
export default function AddProduct (props) {
    const [productInfo, setProductInfo] = useState()
    const cart = useSelector((state) => state.cart.value);
    const cartCount = useSelector((state) => state.cart.count);
    const dispatch = useDispatch();


    function getQuantity() {
        const quantity = document.querySelector('.count')

        return Number(quantity.textContent)
    }



    function addProduct() {
        
        const dub = cart.find((item) => {
            return item.productName == props.data.name
        })
        // check the cart to see if this item has already been added
        // if it there is a product with the same name the updateCart action will pop it and add new data aka quantity
        // this may be a performance issue with replacing the whole object besides updating just the key value of quantity only
            if(!productInfo) {
                console.log(cart)
                setProductInfo({
                    productName: props.data.name
                })
                dispatch(addCart({
                    productName: props.data.name,
                    productPrice: props.data.price,
                    quantity: getQuantity()
                }))
            } else  {
                console.log(cart)
                dispatch(updateCart({
                    productName: props.data.name,
                    productPrice: props.data.price,
                    quantity: getQuantity()
                }))
            }
    }

    return (
        <div>
            <Button onClick={addProduct} className={['btn-custom-orange', styles.btn].join(' ')}>Add To Cart</Button>
        </div>
    )
}