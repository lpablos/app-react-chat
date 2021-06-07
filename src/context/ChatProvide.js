import React from 'react'
export const ChatContext = React.createContext()

const ChatProvide = (props) => {
    const saludo = 'Hola desde el chat'
    return (
        <ChatContext.Provider value={{saludo}}>       
            {props.children}            
        </ChatContext.Provider>
    )
}

export default ChatProvide
