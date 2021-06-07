import React from 'react'
import {ChatContext} from './context/ChatProvide'
import NavBar from './components/NavBar'

const App = () => {
  
  const {saludo} = React.useContext(ChatContext)
  return (
    <div>
      <NavBar/>
     {saludo}
      <h1>Hola</h1>
    </div>
  )
}

export default App
