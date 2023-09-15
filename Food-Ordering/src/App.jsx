import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import ContextProvider from './Store/ContextProvider'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  
  const closeHandler =()=>{
    setIsOpen((prev)=>!prev)
    // props.onClose
  }
  

  return (
    <div className="App">
      <ContextProvider>

      {isOpen && <Cart   onClose ={closeHandler}  />}
      <Header onOpen ={closeHandler}/>
      <main>

      <Meals />
      </main>
      </ContextProvider>
    </div>
  )
}

export default App
