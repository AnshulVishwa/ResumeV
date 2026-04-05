import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DetailsProvider from './DetailsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DetailsProvider>
      <App />
    </DetailsProvider>
  </StrictMode>,
)
