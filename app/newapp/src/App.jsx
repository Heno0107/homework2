import './App.css'
import Header from './components/header/header.jsx'

function App({products}) {
  return (
    <>
      <Header products = {products}/>
    </>
  )
}



export default App