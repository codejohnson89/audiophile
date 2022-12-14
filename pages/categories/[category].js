import { useRouter } from "next/router";
import CategoryHeader from "../../components/CategoryHeader";
import Product from "./product";

import AudioGear from "../../components/AudioGear";
import Tiles from "../../components/Tiles";

/**
 * We're using the useRouter hook to get the category from the URL, then we're filtering the data to
 * only show the products that match the category
 */
export default function Category( { data }) {


    const router = useRouter();
    const filterData = data.filter((data) => {
        return data.category === router.query.category
    })

    return (
        <>
            <CategoryHeader header={router.query.category}/>
            <section className="catergory">
                <ul>
            {
                filterData.map((data) => {
                    return <li key={data.id}>
                        <Product
                        id={data.id}                          
                        productName={data.name} 
                        productDescription={data.description} 
                        productImage={data.image.desktop}
                        productSlug={data.slug}/>
                        </li>
                })

                
            }
                </ul>
            </section>
            <Tiles/>
            <AudioGear />
        </>
    )
}

/**
 * It fetches data from a database and returns it as props
 * @returns An object with a property called props.
 */
export async function getServerSideProps () {
    let data;
    try {
        const res = await fetch('https://audiophile-a8abd-default-rtdb.firebaseio.com/data.json');
        data = await res.json();
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            data,
        }
    }
}
