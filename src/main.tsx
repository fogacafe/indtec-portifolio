import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import RevealController from './RevealController'
import './styles.css'
import './motion.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RevealController />
    <App />
  </StrictMode>,
)
