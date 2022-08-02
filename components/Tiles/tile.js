import Image from "next/image";

export default function Tile (props) {

    const { data } = props;
    console.log(data)
    return (
        <>
            <div className="tile">
                <Image src={data.img} width={122} height={160}/>
                <div className="textContainer">
                    <h6 className="heading-h6">{data.text}</h6>
                    <p className="heading-overline">Shop</p>
                </div>

            </div>     
        </>
    )
}