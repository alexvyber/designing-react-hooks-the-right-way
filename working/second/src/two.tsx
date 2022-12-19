import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("two") as HTMLElement)

let states: { [key in string]: any } = {}

const getValue = (initialValue: any, key: string) => {
  if (states[key] === undefined) {
    states[key] = initialValue
  }

  return states[key]
}

const setValue = (newValue: any, key: string) => {
  states[key] = newValue

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

const Title = () => {
  let count = getValue(0, "count")
  let name = getValue("Alice", "name")

  const onClick = () => {
    console.log("clicked", count)

    setTimeout(() => {
      setValue(count + 1, "count")
      setValue("Alice " + (count + 1), "name")
    }, 1000)
  }

  console.log("updated", count)
  console.log("updated", name)
  return (
    <>
      <button onClick={onClick}>+</button>
      <h1>Hello World+{count}</h1>
      <h1>{name}</h1>
    </>
  )
}

const App = () => (
  <div className="app">
    <Title />
  </div>
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
