import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chinmaya from './Chinmaya.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chinmaya />
  </StrictMode>,
)
