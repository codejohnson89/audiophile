import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, addCart } from '../../DataManagement/features/cart/cartSlice';
import styles from './styles.module.css';


/**
 * The above code is checking if the cart is empty. If it is empty, it will add the product to the
 * cart. If it is not empty, it will check if the product is already in the cart. If it is not in the
 * cart, it will add the product to the cart. If it is in the cart, it will update the quantity of the
 * product in the cart
 * @param props - This is the props that are passed to the component.
 * @returns a div with a button.
 */
export default function AddProduct (props) {
    const [productInfo, setProductInfo] = useState({
        name: '',
        empty: true
    })
    const cart = useSelector((state) => state.cart.value);
    const cartCount = useSelector((state) => state.cart.count);
    const dispatch = useDispatch();


    function getQuantity() {
        const quantity = document.querySelector('.count')

        return Number(quantity.textContent)
    }



    function addProduct() {

        /* The above code is checking if the cart is empty. If it is empty, it will add the product to the
cart. If it is not empty, it will check if the product is already in the cart. If it is not in the
cart, it will add the product to the cart. If it is in the cart, it will update the quantity of the
product in the cart. */
            if(productInfo.empty) {
                console.log("cart is empty")
                setProductInfo({
                    name: props.data.name,
                    empty: false
            })
                dispatch(addCart({
                    productName: props.data.name,
                    productPrice: props.data.price,
                    quantity: getQuantity(),
                    image: props.data.image.mobile
                }))
            } else  {
                if (productInfo.name != props.data.name) {
                    console.log('cart is not empty but this is a new product and here is the current local cart item', productInfo)
                    setProductInfo({name: props.data.name})
                    dispatch(addCart({
                        productName: props.data.name,
                        productPrice: props.data.price,
                        quantity: getQuantity()
                    }))
                } else {
                    console.log(cart)
                    dispatch(updateCart({
                        productName: props.data.name,
                        productPrice: props.data.price,
                        quantity: getQuantity()
                    }))
                }
            }
    }

    return (
        <div>
            <Button onClick={addProduct} className={['btn-custom-orange', styles.btn].join(' ')}>Add To Cart</Button>
        </div>
    )
}