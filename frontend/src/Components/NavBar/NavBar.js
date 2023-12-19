import React from 'react';
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navBar'>
           <nav>
             <ul>
               <Link to="/" className="list">
                 Tables
               </Link>
               <Link to="/create-table" className="list">
                 Create table
               </Link>
               <Link to="/add-row" className="list">
                 Add row
               </Link>
               <Link to="/update" className="list">
                 Update
               </Link>
             </ul>
          </nav>
        </div>
    );

    
};

export default NavBar;