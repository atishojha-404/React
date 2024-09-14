import Navbar  from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import "./components/App.css"

import Data from "./components/Data"


export default function App(){

    const cardData = Data.map((data) => {
        return <Card 
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    description={data.description}
                    price={data.price}
                    coverImg={data.coverImg}
                    rating={data.stats.rating}
                    reviewCount={data.stats.reviewCount}
                    location={data.location}
                    openSpots={data.openSpots}
                />
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    )
}