import { Image } from "react-bootstrap"
import CustomButton from "../Button"

/**
 * It returns a section with a heading, a div with a class of products, and an unordered list with a
 * list item for each product in the others array
 * @param props - This is the props object that is passed to the component.
 */
export function Others(props) {
    return (
        <section className="Others">
            <h3 className="heading-h3">you may also like</h3>
            <div className="products">
                <ul>
                    {/* {props.data.others[0].name} */}
                    {
                        props.data.others.map((product) => {
                            return <li key={product.name}>
                                <Image src={product.image.desktop} alt={product.name} width={350}/>
                                <h5>{product.name}</h5>
                                <CustomButton link={'/product/' + product.id} classname="btn-custom-orange" text="see product"/>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}