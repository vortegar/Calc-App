import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalculadoraApp } from './CalculadoraApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculadoraApp amount='' />
  </React.StrictMode>,
)

