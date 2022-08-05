import Image from "next/image";
import AddProduct from "../AddProduct";
import QuantityBox from "../QuantityBox";

export default function ImageAndText (props) {
    return (
        <div className="product">
                <div className="imageContainer">
                    <Image src={props.image} width={350} height={386} alt="product image"/>
                </div>
                <div className="textContainer">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p className="price">${props.price}</p>
                    <div className="btn-group">
                        <QuantityBox />
                        <AddProduct/>
                    </div>
                    
                </div>
            </div>
    )
}