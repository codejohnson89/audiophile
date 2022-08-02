import NavigationBar from "../Navigation/NavigationBar";

export default function Layout (props) {
    return (
        <>
            <NavigationBar/>
            {props.children}
        </>
    )
}