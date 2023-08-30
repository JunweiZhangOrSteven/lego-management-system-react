import React from 'react'
import ReactDOM from 'react-dom/client'

//css style initialization
import "reset-css"
//UI style

//Global style

import "@/assets/styles/global.scss"
//Component style
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
