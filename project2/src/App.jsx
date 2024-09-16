import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import "./components/App.css"

import Data from "./components/Data"


export default function App() {

    const cardData = Data.map((data) => {
        return <Card
            key={data.id}
            data={data}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    )
}