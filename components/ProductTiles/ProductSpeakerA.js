import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import imageDesktop from '../../public/assets/home/desktop/image-speaker-zx9.png';
import imageTablet from '../../public/assets/home/tablet/image-speaker-zx9.png';
import imageMobile from '../../public/assets/home/mobile/image-speaker-zx9.png';

export default function ProductSpeakerA() {

    return (
        <div className="product-speaker-zx9">
            <div className="imageContainer">
                <Image 
                    src={imageDesktop} 
                    width={410} 
                    height={493} 
                    alt="product image"/>
            </div>
            <div className="textContainer">
                <h1 className="heading-h1">zx9 speaker</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link href="/product/5"><a className="btn btn-custom-black">see product</a></Link>
            </div>
        </div>
    )
}