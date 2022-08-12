import Image from "next/image";
import Link from "next/link";

/**
 * This function takes in a prop called data, which is an object that contains the image source, text,
 * and link. It then returns a div with an image, text, and link
 * @param props - This is the props object that is passed to the component.
 * @returns A div with a class of tile, an image, and a div with a class of textContainer.
 */
export default function Tile (props) {

    const { data } = props;
    return (
        <>
            <div className="tile">
                <Image src={data.img} width={122} height={160} alt="product image"/>
                <div className="textContainer">
                    <h6 className="heading-h6">{data.text}</h6>
                    <p className="heading-overline"><Link href={data.link}>Shop</Link></p>
                </div>

            </div>     
        </>
    )
}