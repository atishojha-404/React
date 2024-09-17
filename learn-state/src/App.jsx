
import "./App.css"

export default function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  
  const array = thingsArray.map((data) => {
      return data;
  })

  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */
  
  return (
      <div>
          <button>Add Item</button>
          <p>{array[0]}</p>
          <p>{array[1]}</p>
          {/* Insert the things here*/}
      </div>
  )
}