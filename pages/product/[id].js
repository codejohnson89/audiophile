import { useRouter } from "next/router";
import Image from "next/image";
import Tiles from "../../components/Tiles";
import AudioGear from "../../components/AudioGear";
import ImageAndText from "../../components/ProductDetails/ImageAndText";
import FeaturesBox from "../../components/ProductDetails/FeaturesBox";
import Link from "next/link";
import BackButton from "../../components/BackButton";
import Gallery from "../../components/ProductDetails/Gallery";
import { Others } from "../../components/ProductDetails/Others";

/**
 * It's a function that takes in a data object and returns a section with a bunch of components that
 * take in the data object
 */
export default function ProductDetail({ data }) {

    const router = useRouter();

    return (
        
/* It's a function that takes in a data object and returns a section with a bunch of components that
 * take in the data object */
<>
    <BackButton />
    <section className="product-details">
        <ImageAndText
            data={data} 
            image={data.image.desktop} 
            name={data.name} 
            description={data.description} 
            price={data.price}/>
        <FeaturesBox 
        features={data.features}
        includes={data.includes}/>
        <Gallery data={data}/>
        <Others data={data}/>
        <Tiles />
        <AudioGear />
    </section>
</>

    )
}

/**
 * The getServerSideProps function is used to fetch data from an external API and then pass that data
 * to the page component as props
 * @param context - An object with the following properties:
 * @returns The data is being returned as props.
 */
export async function getServerSideProps(context) {
    const id = context.params.id;

    let data;
    try {
        const res = await fetch(`https://audiophile-a8abd-default-rtdb.firebaseio.com/data/${id}.json`);
        data = await res.json();
    } catch (error) {
        console.log(error)
    }


    return {
      props: {
        data,
      }, // will be passed to the page component as props
    }
  }