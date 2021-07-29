import {NavLink} from 'react-router-dom';
import React from 'react';

const Navigation=()=> (<nav>

  <NavLink
    exact
    to="/"
    className="NavLink"
    activeClassName="NavLink--active">
    Home
  </NavLink>


  <NavLink
    to="/movies"
    className="NavLink"
    activeClassName="NavLink--active">
    Movies
  </NavLink>

</nav>)
export default Navigation;