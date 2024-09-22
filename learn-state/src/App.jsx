// challenge *

// import React from "react"

// import "./App.css"

// export default function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
  
//   const array = thingsArray.map((data) => <p key={data}>{data}</p>)

//   function addItem(){
//     const arrayLength = thingsArray.length + 1;
//     const addedThing = "Thing " + arrayLength;
//     thingsArray.push(addedThing)
//     console.log(thingsArray)
//   }
  
//   return (
//       <div>
//           <button onClick={addItem}>Add Item</button>
//           {array}
//       </div>
//   )
// }



// challenge *


// import React from "react"

// import "./App.css"

// export default function App(){
//     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         const newThingText = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState, newThingText])
//     }
    
//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }


// function addTwoNumbers(a, b) {
//     a = 42  // Don't do this!
//     return a + b
// }

// addTwoNumbers(1, 2)





/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/


// import React from "react"

// import "./App.css"

// export default function App(){

//     function greeting(name) {
//         const date = new Date()
//         const hours = date.getHours()

//         console.log(`Current hours = ${hours}`)

//         let greetings

//         if(hours >= 4 && hours < 12){
//             greetings = "morning"
//         }else if(hours >= 12 && hours < 17){
//             greetings = "afternoon"
//         }else if(hours >= 17 && hours < 20){
//             greetings = "evening"
//         }else{
//             greetings = "night"
//         }

//         return `Good ${greetings}, ${name}!`
//     }

//     return (
//         greeting("Atish")
//     )

// }


// Q&N

// 1. How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)


// 2. When would you want to use props instead of state?
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.


// 3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).


// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props are immutable. State is mutable.




// Challenge: 1

/**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */


// import {useState} from "react"

// import "./App.css"

// export default function App() {
    
//     const [isImportant, fun] = useState("NO")
//     console.log(isImportant)
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value">
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }


/**
     * Challenge: 2 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */


// import { useState } from "react";
// import "./App.css"

// export default function App() {

//     const [isImportant, setIsImportant] = useState("Yes")


//     function handleClick() {
//         if(isImportant == "Yes"){
//             setIsImportant("No")
//         }else{
//             setIsImportant("Yes")
//         }        
//     }    
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div onClick={handleClick} className="state--value">
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }





/**
     * Challenge: 3
     *  Set up state to track our count (initial value is 0)
     */


// import {useState} from "react"
// import "./App.css"

// export default function App() {

//     const [count, setCount] = useState(0);

//     /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */

//     function countPlusClick(){
//         setCount(prevCount => prevCount + 1)
//     }

//     function countMinusClick(){
//         if(count != 0){
//             setCount(prevCount => prevCount - 1)
//         }
        
//     }
    
//     return (
//         <div className="counter">
//             <button onClick={countMinusClick} className="counter--minus">–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button onClick={countPlusClick} className="counter--plus">+</button>
//         </div>
//     )
// }



// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
   
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// Whenever you DO need the previous value to determine the new value




/**
      * Challenge: 4
      * 
      * Replace the if/else below with a ternary
      * to determine the text that should display on the page
      */

// import "./App.css"

// export default function App() {

//      const isGoingOut = false

//      // let answer = isGoingOut ? "Yes" : "No"
     
//      return (
//          <div className="state">
//              <h1 className="state--title">Do I feel like going out tonight?</h1>
//              <div className="state--value">
//                {/* <h1>{answer}</h1> */}
//                <h1>{isGoingOut ? "Yes" : "No"}</h1>
//              </div>
//          </div>
//      )
//  }



 /**
     * Challenge: 5
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    


// import { useState } from "react"
// import "./App.css"

// export default function App() {

//      const [isGoingOut, setIsGoingOut] = useState(true);

//      function answer() {
//           setIsGoingOut(prevState => !prevState)
//       }
     
//      return (
//          <div className="state">
//              <h1 className="state--title">Do I feel like going out tonight?</h1>
//              <button onClick={answer} className="state--value">
//                {isGoingOut ? "Yes" : "No"}
//              </button>
//          </div>
//      )
//  }




// challenge *


// import {useState} from "react"

// import "./App.css"

// export default function App(){
//     const [things, setThings] = useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         setThings(prevState => {
//             return [...prevState, `Thing ${things.length + 1}`]
//         })
//     }
    
//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }




/**
     * Challenge: 6
     *  Fill in the values in the markup
     * using the properties of our state object above
     */
    /**
     Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     */


import {useState} from "react"
import "./App.css"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-fill.svg" : "star.svg"

    
    function toggleFavorite() {
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./src/assets/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`./src/assets/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
