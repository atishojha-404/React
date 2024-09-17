import "./Navbar.css"

import logo from "../assets/Troll_Face.svg"

export default function Navbar(){
    return(
        <nav>
            <img className="nav-icon" src={logo} alt="logo"/>
            <h3 className="nav-logo-text">Meme Generator</h3>
            <h4 className="nav-title">React Course - Project 3</h4>
        </nav>
    )
}