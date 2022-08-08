export default function Gallery (props) {

    const top = {
        backgroundImage: `url(${props.data.gallery.first.desktop})`
    }
    const bottom = {
        backgroundImage: `url(${props.data.gallery.second.desktop})`
    }
    const right = {
        backgroundImage: `url(${props.data.gallery.third.desktop})`
    }

    console.log(top.backgroundImage)

    return (
        <section className="gallery">
            <div className="left-side">
                <div style={top} className="top"></div>
                <div style={bottom} className="bottom"></div>
            </div>
            <div style={right} className="right-side"></div>
        </section>
    )
}