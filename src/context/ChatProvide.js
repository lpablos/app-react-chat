import React,{useState, useEffect} from 'react'
import {auth} from '../firebase'
export const ChatContext = React.createContext()

const ChatProvide = (props) => {
    
    const dataUsuario = {
        uid: null,
        email: null,
        estado: null
    }
    const [usuario, setUsuario] = useState(dataUsuario)
    useEffect(() => {
        detectarUsuario()
    }, [])

    const detectarUsuario = () =>{
        auth.onAuthStateChanged(user =>{
            if(user){
                setUsuario({
                    uid: usuario.uid,
                    email: usuario.email,
                    estado: true
                })
            }else{
                setUsuario({
                    uid: null,
                    email: null,
                    estado: false
                })
            }
        })
    }
    return (
        <ChatContext.Provider value={{usuario}}>       
            {props.children}            
        </ChatContext.Provider>
    )
}

export default ChatProvide
