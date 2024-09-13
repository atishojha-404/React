import "./Navbar.css"
import logo from "../../public/assets/airbnb-logo.svg"

export default function Navbar(){
    return(
        <nav>
            <img className="nav-logo" src={logo}/>
        </nav>
    )
}