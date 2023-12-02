import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Context from './poc/Context.jsx';
ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    <BrowserRouter>
      <App />
      {/* <Context></Context> */}
    </BrowserRouter>
    ,
  )
