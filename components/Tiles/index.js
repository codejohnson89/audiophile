import Tile from "./tile";

import headphones from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png';

const tileData = [
    {
        img: headphones.src,
        text: 'headphones'
    },
    {
        img: earphones.src,
        text: 'earphones'
    },
    {
        img: speakers.src,
        text: 'speakers'
    }
]

export default function Tiles () {

    console.log(tileData)

    return (
        <section className='OccasionTiles'>
           {
            tileData.map((data) => {
                return <Tile key={data.text} data={data}/>
            })
           }
        </section>
    )
}