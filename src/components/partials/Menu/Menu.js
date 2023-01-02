import React from 'react'
import './Menu.css'



function Menu() {
  return (
    <div>
        <nav>
            <ul className="liste">
                <li className="li"> <a href='/'>Home</a> </li>
                <li className="li"> <a href='/manualprev'>Consult</a> </li>
                <li className="li"> <a href='/add'> Add</a></li>
            </ul>
    	</nav>
    </div>
  )
}

export default Menu