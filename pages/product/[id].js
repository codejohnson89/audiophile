import { useRouter } from "next/router";
import Image from "next/image";
import Tiles from "../../components/Tiles";
import AudioGear from "../../components/AudioGear";
import ImageAndText from "../../components/ProductDetails/ImageAndText";
import FeaturesBox from "../../components/ProductDetails/FeaturesBox";

export default function ProductDetail({ data }) {
    return (
        <section className="product-details">
            <ImageAndText 
                image={data.image.desktop} 
                name={data.name} 
                description={data.description} 
                price={data.price}/>
            <FeaturesBox 
            features={data.features}
            includes={data.includes}/>
            <Tiles />
            <AudioGear />
        </section>
    )
}

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