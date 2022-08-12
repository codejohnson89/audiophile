import NavigationBar from "../Navigation/NavigationBar";

/**
 * It returns a NavigationBar component, the children of the Layout component, and a footer
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns The NavigationBar component, the children of the Layout component, and the footer.
 */
export default function Layout (props) {
    return (
        <>
            <NavigationBar/>
            {props.children}
            <div className="footer">Footer</div>
        </>
    )
}