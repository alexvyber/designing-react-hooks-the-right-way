import { useEffect } from "react"
import "./App.css"

type Props = { root: any; count: any }

function App({ root, count }: Props) {
  const up = () => {
    count = count + 1
    console.log("clicked", count)

    setValue(count)
    setTimeout(function some() {
      root.render(<App root={root} count={count} />)
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

export default App
