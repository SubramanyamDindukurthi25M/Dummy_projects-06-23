import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

// PrimeReact Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"     
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"                                         
import "primeflex/primeflex.css"    
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
