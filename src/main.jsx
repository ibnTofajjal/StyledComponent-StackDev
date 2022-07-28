import React from 'react'
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
)
