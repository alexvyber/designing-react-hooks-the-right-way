import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Second from "./Second"
import "./index.css"
import Third from "./Third"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const whichToRender: number = 3

root.render(
  <React.StrictMode>
    {(() => {
      switch (whichToRender) {
        case 1:
          return <App root={root} count={100} />

        case 2:
          return <Second />

        case 3:
          return <Third />

        default:
          throw new Error("ASSSS")
      }
    })()}
  </React.StrictMode>,
)
