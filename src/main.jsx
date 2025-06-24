import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { script } from 'framer-motion/client'
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App/>  
  </BrowserRouter>
)
