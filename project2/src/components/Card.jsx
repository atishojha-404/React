import "./Card.css"

import starImage from "../../public/assets/star.png"

export default function Card(props) {
    return(
        <div className="card">
            <img 
                className="card--image" 
                src={props.img} 
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
                <span className="gray" >{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}