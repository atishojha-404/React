import "./Card.css"

import starImage from "../assets/star.png"

const imagePath = "./src/assets/"

export default function Card(props) {

    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                className="card--image"
                src={`${imagePath}${props.data.coverImg}`}

                alt="Card Image"
            />
            <div className="card--stats">
                <img
                    className="card--star"
                    src={starImage}
                    alt="Star Images"
                />
                <span>{props.data.stats.rating}</span>
                <span className="gray" >({props.data.stats.reviewCount}) • </span>
                <span className="gray" >{props.data.location}</span>
            </div>
            <h2>{props.data.title}</h2>
            <p><span className="bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}