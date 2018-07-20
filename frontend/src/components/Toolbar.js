import React from 'react'
import { NavLink } from 'react-router-dom'


const toolbar = (props) => {

    return (
        <header>
            <div className="list-books-title">
                <h1>R</h1>
            </div>
            <nav className="">
                <div className="nav-list">
                    <div className="nav-list-item">
                        <NavLink to="/">Home</NavLink>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default toolbar