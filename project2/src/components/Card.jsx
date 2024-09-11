import "./Card.css"

import cardImagge from "../assets/image1.png"
import starImage from "../assets/star.png"

export default function Card() {
    return(
        <div className="card">
            <img 
                className="card--image" 
                src={cardImagge} 
                alt="Card Image"
            />
            <div className="card--stats">
                <img 
                    className="card--star" 
                    src={starImage} 
                    alt="Star Images"
                />
                <span>5.0</span>
                <span className="gray" >(6) • </span>
                <span className="gray" >Nepal</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}