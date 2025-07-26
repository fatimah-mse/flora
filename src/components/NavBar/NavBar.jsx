
const NavBar = ({image, items, btn}) => {
    return (
        <nav>
            <img src={image} alt="" />
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button>{btn}</button>
        </nav>
    )
}

export default NavBar
