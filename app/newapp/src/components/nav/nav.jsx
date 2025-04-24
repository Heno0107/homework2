import style from './nav.module.css'

function Nav (props) {
    return (
        <nav>
            <h1>
                Store
            </h1>

            <ul>
                {props.lis}
            </ul>
        </nav>
    )
}

export default Nav