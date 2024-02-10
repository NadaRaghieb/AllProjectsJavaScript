import React from "react"
import App from "./App"
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter} from "react-router-dom"


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)