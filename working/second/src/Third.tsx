import "./App.css"

let value: any = undefined

const getValue = (initValue: any) =>
  value === undefined ? (value = initValue) : value

const setValue = (newValue: any) => {
  console.log("🚀 ~ value before update", value)
  value = newValue
  console.log("🚀 ~ value after update", value)
}

export default function Third() {
  const count = getValue(101)

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
