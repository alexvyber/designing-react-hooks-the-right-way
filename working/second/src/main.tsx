import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("one") as HTMLElement)

let value: any = undefined

const getValue = (initialValue: any) => {
  if (value === undefined) {
    value = initialValue
  }

  return value
}

const setValue = (newValue: any) => {
  value = newValue
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

const Title = () => {
  let count = getValue(0)

  const onClick = () => {
    console.log("clicked", count)
    count = count + 1
    setValue(count)
  }

  console.log("updated", count)
  return (
    <>
      <button onClick={onClick}>+</button>
      <h1>Hello World+{count}</h1>
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
