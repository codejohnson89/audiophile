import Head from 'next/head'
import Image from 'next/image'
import AudioGear from '../components/AudioGear'
import HeroHome from '../components/heroHome/HeroHome'
import NavigationBar from '../components/Navigation/NavigationBar'
import ProductTiles from '../components/ProductTiles'
import Tiles from '../components/Tiles/'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile Home Page</title>
        <meta name="description" content="Audiophile Ecommerce site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroHome />
        <Tiles/>
        <ProductTiles />
        <AudioGear />
      </main>
    </div>
  )
}
