/**
 * It's a function that returns a section with a class of gallery, which contains a div with a class of
 * left-side, which contains two divs, one with a class of top and one with a class of bottom, and a
 * div with a class of right-side
 * @param props - this is the data that is passed in from the parent component.
 * @returns A section with a class of gallery.
 */
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