import React from 'react'
import { NavLink } from 'react-router-dom'


const toolbar = (props) => {

    return (
        <header>
            <div className="list-books-title">
                <h1>Readable Blog</h1>
            </div>
            <nav className="">
                <div className="nav-list">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/postAdd">Add</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default toolbar