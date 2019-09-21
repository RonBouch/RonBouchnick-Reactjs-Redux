import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const navStyle={
    color:'white'
};
export default class Nav extends Component {
    
    render() {
        return (
          <nav>
              <h3>Rons-Movies</h3>
              <ul className="nav-links">
                 <Link to="/" style={navStyle}> <li>Home</li></Link>
                 <Link to="/Favorite"style={navStyle}> <li>Movie details</li></Link>
              </ul>
          </nav>
        )
    }
}
