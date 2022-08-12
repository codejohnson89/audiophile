import CategoryHeader from '../../components/CategoryHeader';
import Product from './product';

/**
 * We're mapping over the data that we're passing in from the props and returning a list item with a
 * Product component inside of it
 */
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

/**
 * It fetches data from a remote API and returns it as props
 * @returns An object with a props property.
 */
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