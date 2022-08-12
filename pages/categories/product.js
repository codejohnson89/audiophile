/**
 * It returns a div with two child divs, one with an image and one with text
 * @param props - {
 * @returns A div with a class of product.
 */
import Image from "next/image";
import CustomButton from "../../components/Button";

export default function Product (props) {

    return (
        <div className="product">
            <div className="imageContainer">
                <Image src={props.productImage} width={350} height={386} alt="product image"/>
            </div>
            <div className="textContainer">
                <h2>{props.productName}</h2>
                <p>{props.productDescription}</p>
                <CustomButton link={'/product/' + props.id} classname="btn-custom-orange" text="see product"/>
            </div>
        </div>
    )
}