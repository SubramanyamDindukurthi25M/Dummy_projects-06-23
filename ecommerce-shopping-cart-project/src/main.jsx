import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient,QueryClientProvider } from 'react-query'

// PrimeReact Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"     
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"                                         
import "primeflex/primeflex.css"    

import { App } from './App'
import './styles/Main.scss'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
