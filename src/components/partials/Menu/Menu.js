import React from 'react'
import './Menu.css'



function Menu() {
  return (
    <div>
        <nav>
            <ul className="liste">
                <li className="li"> <a href='/'>Home</a> </li>
                <li className="li"> <a href='/consult'>Consult</a> </li>
                <li className="li"> <a href='/added'> Add</a></li>
            </ul>
    	</nav>
    </div>
  )
}

export default Menu