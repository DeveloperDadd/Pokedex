export default function Nav(props) {
    const name = props.name
    return(
        <nav>
            <h1>Hey {name}!</h1>
            <ul>
                <li>Pokedex</li>
                <li>My Team</li>
            </ul>
        </nav>
    )
}