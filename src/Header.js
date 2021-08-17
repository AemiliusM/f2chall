import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <section className='header'>
         <NavLink to={`/dogs`}>
            <span> to Dogs</span>
         </NavLink>
         <br/>
         <NavLink to={`/cats`}>
            <span> to Cats</span>
         </NavLink>
            <br/>
         <NavLink to={`/`}>
             <span>Home Page</span>
         </NavLink> 
        </section> ); 
    }
}
 
export default Header;