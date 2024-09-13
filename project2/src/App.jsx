import Navbar  from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import cardImagge from "../public/assets/image1.png"


export default function App(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Card 
                img = {cardImagge}
                rating = {5.0}
                reviewCount = {6}
                country = "Nepal"
                title = "Life Lessons with Katie Zaferes"
                price = {136}
            />
        </div>
    )
}