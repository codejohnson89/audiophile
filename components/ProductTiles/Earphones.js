import Image from "next/image";
import Link from "next/link";


export default function Earphones() {
    return (
        <div className="product-earphones-yx1">
            <div className="tile image"></div>
            <div className="tile">
                <div className="textContainer">
                    <h4 className="heading-h4">yx1 earphones</h4>
                    <Link href="/"><a className="btn btn-custom-black">see product</a></Link>
                </div>
            </div>
        </div>
    )
}