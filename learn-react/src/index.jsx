// import React from "react"
// import ReactDOM from "react-dom"
// import "./index.css"


// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))





// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.





// import React from "react";
// import ReactDOM from "react-dom"

// const page = (
//     <div>
//         <img src="./logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))







// import React  from "react";
// import ReactDOM from "react-dom"
// import "./index.css"


// function TemporaryName(){
//     return(
//         <div>
//             <img src="./logo.png" width="40px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))





// Quiz!

// 1. What is a React component?
// A function that returns React elements. (UI)

// 2. What's wrong with this code?
// ```
// function MyComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(<Header />, document.getElementById("root"))
// ```




// import React from "react"
// import ReactDOM from "react-dom"
// import "./style.css"


// function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img className="nav-logo" src="./logo.png"/>
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))




import ReactDOM from "react-dom"

import "./style.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))



