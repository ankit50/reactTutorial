import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App, Profile} from './App.jsx'
import { Card } from './Components/Card.jsx'
import BgChanger from './BgChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile />
    <Card btnName='Red'/>
    <BgChanger />
  </StrictMode>,
)
