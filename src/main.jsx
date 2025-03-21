import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './context/Authcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
    <App />
    </Authcontext>
  </StrictMode>,
)
