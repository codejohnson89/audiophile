import logo from '../../public/assets/shared/desktop/logo.svg';
import facebook from '../../public/assets/shared/desktop/icon-facebook.svg';
import instagram from '../../public/assets/shared/desktop/icon-instagram.svg';
import twitter from '../../public/assets/shared/desktop/icon-twitter.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className='wrapper'>
                    <div className='top'>
                        <div className='logo'>
                            <Image src={logo} alt="Home image"/>
                        </div>
                        <div className='navLinks'>
                            <Link href="/"><a className="nav-link">Home</a></Link>
                            <Link href="/categories/headphones"><a className="nav-link">Headphones</a></Link>
                            <Link href="/categories/speakers"><a className="nav-link">Speakers</a></Link>
                            <Link href="/categories/earphones"><a className="nav-link">Earphones</a></Link>
                        </div>
                    </div>
                    <div className='middle'>
                        <div className='text'>
                            <p>
                            Audiophile is an all in one stop to fulfill your audio needs. Were a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - were open 7 days a week.
                            </p>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='copyright'>
                            <p>
                            Copyright 2021. All Rights Reserved
                            </p>
                        </div>
                        <div className='socialmedia'>
                            <Link href="#">
                                <Image src={facebook} alt="facebook" width={24} height={24}/>
                            </Link>
                            <Link href="#">
                                <Image src={instagram} alt="instagram" width={24} height={24} />
                            </Link>
                            <Link href="#">
                                <Image src={twitter} alt="twitter" width={24} height={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}