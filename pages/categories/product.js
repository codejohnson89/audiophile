import Image from "next/image";
import CustomButton from "../../components/Button";

export default function Product (props) {
    // console.log(props.data)
    return (
        <div className="product">
            <div className="imageContainer">
                <Image src={props.productImage} width={350} height={386} alt="product image"/>
            </div>
            <div className="textContainer">
                <h2>{props.productName}</h2>
                <p>{props.productDescription}</p>
                <CustomButton classname="btn-custom-orange" text="see product"/>
            </div>
        </div>
    )
}