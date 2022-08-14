import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../../components/BackButton';
import Image from 'next/image';

/**
 * It's a checkout form that uses the useForm hook from react-hook-form to handle form validation and
 * submission
 */
export default function Checkout () {
    const products = useSelector((state) => state.cart.value);
    let [totalPrice, setTotalPrice] = useState(0);
    let [vat, setVAT] = useState(0);
    let [grandTotal, setGrandTotal] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [ selected, setSelected] = useRef(null)


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

/**
 * The function VAT() is called in the useEffect function. The function then calculates the VAT
 * by multiplying the total price by 0.2. The function then calls the setVAT() function to set the VAT
 * state
 */
  function VAT() {
    let sum = totalPrice * .2;
    setVAT(sum)
  }

/**
 * The function gt() is called in the useEffect function. The function adds 50 to the totalPrice
 * variable and sets the grandTotal variable to the new value
 */
  function gt () {
    let sum = totalPrice + 50;
    setGrandTotal(sum)
  }


  useEffect(() => {
    total()
    VAT()
    gt()
  }, [])

    return (
        <>
            <BackButton />
            <section className="checkout" id="checkout">
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='formDataCollection'>
                        <div className='section'>
                            <p className='heading-subtitle'>billing details</p>
                            <div className='form-group'>
                            <div className='group'>
                                <label className="label-custom" >name</label>
                                <input className="input-custom-text" {...register("name")} />
                            </div>
                            <div className='group'>
                                <label className="label-custom" >email</label>
                                <input className="input-custom-text" {...register("email")} />
                            </div>
                            <div className='group'>
                                <label className="label-custom" >phone</label>
                                <input className="input-custom-text" {...register("phone")} />
                            </div>
                        </div>
                        </div>
                        <div className='section'>
                            <p className='heading-subtitle'>shipping info</p>
                            <div className='form-group'>
                                <div className='group address'>
                                    <label className="label-custom" >address</label>
                                    <input className="input-custom-text" {...register("address")} />
                                </div>
                                <div className='group'>
                                    <label className="label-custom" >zip</label>
                                    <input className="input-custom-text" {...register("zip")} />
                                </div>
                                <div className='group'>
                                    <label className="label-custom" >city</label>
                                    <input className="input-custom-text" {...register("city")} />
                                </div>
                                <div className='group'>
                                    <label className="label-custom" >country</label>
                                    <input className="input-custom-text" {...register("country")} />
                                </div>
                        </div>
                        </div>
                        <div className='section'>
                            <p className='heading-subtitle'>payment details</p>
                            <div className='form-group'>
                                <div className='payment-section'>
                                    <label className='label-custom'>payment method</label>
                                    <div className='group'>
                                        <div className='border'>
                                            <label className="label-custom" >Credit Card</label>
                                            <input id='cc' ref={selected} type="radio" className="input-custom-radio" {...register("address")} />
                                        </div>
                                        {/* <div className='border'>
                                            <label className="label-custom" >Cash on Delivery</label>
                                            <input id='cash' type="radio" className="input-custom-radio" {...register("address")} />
                                        </div> */}
                                    </div>
                                </div>
                                <div className='group'>
                                    <label className="label-custom" >card number</label>
                                    <input className="input-custom-text" {...register("card")} />
                                </div>
                                <div className='group'>
                                    <label className="label-custom" >CVV</label>
                                    <input className="input-custom-text" {...register("cvv")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='product-review'>
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
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <div className='shipping'>
                            <p>Shipping</p>
                            <span>$ 50</span>
                        </div>
                        <div className='vat'>
                            <p>VAT</p>
                            <span>$ {vat}</span>
                        </div>
                        <div className='grandTotal'>
                            <p>Grand Total</p>
                            <span>$ {grandTotal}</span>
                        </div>
                        <input className="btn btn-custom-orange" type="submit" placeholder='continue & pay'/>
                    </div>
                </form>
            </div>

        </section>
        </>

    )
}