import Nav from '../nav/nav.jsx'
import Section from "../section/section.jsx";

function Header ({products}) {
    return (
        <>
        <Nav />
        <Section products = {products}/>
        </>
    )
}

export default Header