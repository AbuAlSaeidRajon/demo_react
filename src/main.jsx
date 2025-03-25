import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = "Rajon Al Saeid";
const first_page = 2023;

const demo = (
  <div>
    <h1>Hello! My name is {name}</h1>
    <p>I have {2025 - first_page} years of experience in web development</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {demo}
  </StrictMode>,
)
