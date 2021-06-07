import React from 'react'
import {ChatContext} from './context/ChatProvide'

const App = () => {
  
  const {saludo} = React.useContext(ChatContext)
  return (
    <div>
     {saludo}
      <h1>Hola</h1>
    </div>
  )
}

export default App
