
import "./Navbar.css";
import {Link} from "react-router-dom"
import React from 'react'
import { MenuItems1 } from "./MenuItems";

const Navbar1 = () => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Electhon</h1>
            <ul className="nav-menu">
                {MenuItems1.map((item,index)=>{
                    return(
                        <li key={index}>
                         <a className={item.cName} href={item.url}>
                          <i className={item.icon}></i>{item.title}
                         </a>
                        </li>
                    );
                })}
                <Link to='/login'><button>Sign Up</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar1