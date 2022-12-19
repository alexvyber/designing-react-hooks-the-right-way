// import { useEffect } from "react"
import "./App.css"

// type Props = { root: any; count: any }

export default function Second() {
  const count = getValue(100)

  const up = () => {
    console.log("clicked", count)

    setTimeout(function some() {
      setValue(count + 1)
    }, 1000)
  }

  console.log("updated", count)
  // console.log("somesome", some)

  // console.log(getValue())

  return (
    <div className="App">
      <button onClick={up}>+</button>
      <h1>Hello World+{count}</h1>
    </div>
  )
}
