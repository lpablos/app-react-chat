import React, {useContext} from 'react'
import { ChatContext } from '../context/ChatProvide'

const NavBar = () => {
    const {usuario, ingresoUsuario, cerrarSession} = useContext(ChatContext)
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">Chat React Nav</span>
            <div>
                {
                    usuario.estado ? 
                    (
                        <button 
                            className="btn btn-outline-danger my-2"
                            onClick={cerrarSession}>Cerrar Session</button>
                    ):
                    (
                        <button 
                            className="btn btn-outline-success my-2"
                            onClick={ingresoUsuario}>Acceder</button>
                    )
                }
            </div>

        </nav>
    )
}

export default NavBar
