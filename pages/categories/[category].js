import { useRouter } from "next/router";
import CategoryHeader from "../../components/CategoryHeader";
import Product from "./product";

import database from '../../DataManagement/data/data.json';

export default function Category( { data }) {


    const router = useRouter();
    const filterData = data.filter((data) => {
        return data.category === router.query.category
    })

    console.log(filterData)



    console.log(router)
    return (
        <section>
            <CategoryHeader header={router.query.category}/>
            <div className="catergory">
                <ul>
            {
                filterData.map((data) => {
                    return <li key={data.id}>
                        <Product                          
                        productName={data.name} 
                        productDescription={data.description} 
                        productImage={data.image.desktop}/>
                        </li>
                })

                
            }
            </ul>
        </div>
        </section>
    )
}

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