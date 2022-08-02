import Earphones from "./Earphones";
import ProductSpeakerA from "./ProductSpeakerA";
import ProductSpeakerB from "./ProductSpeakerB";

export default function ProductTiles () {
    return (
        <section className={['productTiles'].join(' ')}>
            <ProductSpeakerA />
            <ProductSpeakerB />
            <Earphones />
        </section>
    )
}