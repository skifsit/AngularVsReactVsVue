import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/users/list'>Go to Users List</Link>
      </div>
    );
  }
}

export default NavBar;
