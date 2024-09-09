import logo from "../assets/react.svg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-icon" src={logo}/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}