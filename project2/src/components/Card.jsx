import "./Card.css"

import cardImagge from "../assets/image1.png"
import starImage from "../assets/star.png"

export default function Card() {
    return(
        <div className="card">
            <img className="card--image" src={cardImagge} />
            <div className="card--stats">
                <img className="card--star" src={starImage} />
                <span>5.0</span>
                <span className="gray" >(6) • </span>
                <span className="gray" >Nepal</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}