import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { products } from './database.js'

createRoot(document.getElementById('root')).render(

    <App products = {products}/>

)
