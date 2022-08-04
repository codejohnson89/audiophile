import Image from "next/image";
import Link from "next/link";

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