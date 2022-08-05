import { useForm } from 'react-hook-form';
import BackButton from '../../components/BackButton';

export default function Checkout () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <section className="checkout" id="checkout">
            <BackButton />
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
                                            <input type="radio" className="input-custom-radio" {...register("address")} />
                                        </div>
                                        <div className='border'>
                                            <label className="label-custom" >Cash on Delivery</label>
                                            <input type="radio" className="input-custom-radio" {...register("address")} />
                                        </div>
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




                    
                    {/* include validation with required or other standard HTML validation rules */}
                    {/* <input className="input-custom-text" {...register("exampleRequired", { required: true })} /> */}
                    {/* errors will return when field validation fails  */}
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    
                    <input className="input-custom-text" type="submit" />
                </form>
            </div>

        </section>
    )
}