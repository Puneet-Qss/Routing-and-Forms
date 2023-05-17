import React from 'react'
import {Link} from 'react-router-dom';



function MainNavigation() {
  return (   
    <header>
        <nav>
            <ul >
               <Link to="/">Home</Link>
               <Link to="/About">About</Link>
               <Link to="/Contact">Contact</Link>
            </ul>
        </nav>
    </header>

  )
}

export default MainNavigation