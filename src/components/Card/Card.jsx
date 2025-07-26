import './Card.css'

const Card = ({image, title, description, btn, linkTitle}) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <button style={{display: btn?.show ? "inline" : "none"}}>{btn?.content}</button>
            <a href="#">{linkTitle}</a>
        </div>
    )
}

export default Card

