import Image from "next/image";
import Link from "next/link";

export default function HeroHome () {
    return (
        <>
            <section className="heroHome">
                <div className="wrapper">
                <div className="textContainer">
                    <p className="heading-overline">new product</p>
                    <h1 className="heading-h1">XX99 Mark II Headphones</h1>
                    <p className="description">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Link href="/product/3"><a className="btn btn-custom-orange">see product</a></Link>
                </div>
                {/* <div className="imageContainer">
                    <Image src={hero} />
                </div> */}
                </div>
            </section>
        </>
    )
}