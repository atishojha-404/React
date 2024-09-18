import { useState } from "react"
import "./Meme.css"

import MemeData from "./MemeData"

export default function Meme() {

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        setMemeImage(memesArray[randomNumber].url)
    }
    

    return (
        <main>
            <div className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            placeholder="Shut up"
                            className="form--input"
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                    <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    </label>
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
}