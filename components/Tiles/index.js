import Tile from "./tile";

import headphones from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png';

const tileData = [
    {
        img: headphones.src,
        text: 'headphones',
        link: '/categories/headphones'
    },
    {
        img: earphones.src,
        text: 'earphones',
        link: '/categories/earphones'
    },
    {
        img: speakers.src,
        text: 'speakers',
        link: '/categories/speakers'
    }
]

export default function Tiles () {

    return (
        <section className='OccasionTiles'>
           {
            tileData.map((data) => {
                return <Tile key={data.text} data={data} link={data.link}/>
            })
           }
        </section>
    )
}