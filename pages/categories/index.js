import CategoryHeader from '../../components/CategoryHeader';
// import database from '../../DataManagement/data/data.json';
import Product from './product';

// import { getDatabase, ref, onValue} from "firebase/database";

// import { app } from '../../firebase/firebase';

export default function Categories( {data} ) {
    // console.log(data)

    const productData = data

    return ( 
        <section>
            <CategoryHeader header="All Products"/>
            <div className="catergory">
                <ul>
            {
                productData.map((data) => {
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

export async function getStaticProps() {
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