import Image from "next/image";
import AddProduct from "../AddProduct";
import QuantityBox from "../QuantityBox";

/**
 * It returns a div with two child divs, one with an image and one with text
 * @param props - {
 * @returns A div with a class of product. Inside the div is two divs, one with a class of
 * imageContainer and the other with a class of textContainer. Inside the imageContainer div is an
 * image with a source of props.image, a width of 350, a height of 386, and an alt of product image.
 * Inside the textContainer div is an h2 with the text of props
 */
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
                        <AddProduct data={props.data}/>
                    </div>
                    
                </div>
            </div>
    )
}