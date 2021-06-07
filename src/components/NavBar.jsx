import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">Chat React Nav</span>
            <div>
                <button className="btn btn-outline-success my-2">Acceder</button>
                <button className="btn btn-outline-danger my-2">Cerrar Session</button>
            </div>

        </nav>
    )
}

export default NavBar
