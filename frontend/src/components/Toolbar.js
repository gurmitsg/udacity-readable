import React from 'react'
import { NavLink } from 'react-router-dom'


const toolbar = (props) => {

    return (
        <header>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <nav className="main-nav">
                <div className="open-search">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/postAdd">Add</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default toolbar