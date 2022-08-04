export default function FeaturesBox(props) {
    return (
        <div className="featuresBox">
            <div className="features">
                <h3 className="heading-h3">Features</h3>
                <p>{props.features}</p>
            </div>
            <div className="box">
                <h3 className="heading-h3">In the box</h3>
                <ul className="items">
                    {
                        props.includes.map((accessories) => {
                            return <li key={accessories.item}><div className="count">{accessories.quantity}x</div><div className="item">{accessories.item}</div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}