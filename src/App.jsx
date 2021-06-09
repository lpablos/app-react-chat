import React from 'react'
import {ChatContext} from './context/ChatProvide'
import NavBar from './components/NavBar'

const App = () => {
  
  const {usuario} = React.useContext(ChatContext)
  return usuario !== null? (
    <div>
      <NavBar/>
      
      <h1>Hola  "{usuario.estado}"</h1>
    </div>
  ): ('<div>Cargando ... </div>') 
}

export default App
