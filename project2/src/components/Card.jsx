import "./Card.css"

import starImage from "../assets/star.png"

const imagePath = "./src/assets/"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img 
                className="card--image" 
                src={`${imagePath}${props.coverImg}`}
                
                alt="Card Image"
            />
            <div className="card--stats">
                <img 
                    className="card--star" 
                    src={starImage} 
                    alt="Star Images"
                />
                <span>{props.rating}</span>
                <span className="gray" >({props.reviewCount}) • </span>
                <span className="gray" >{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}