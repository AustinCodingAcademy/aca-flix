import React, { Component } from 'react';
 
class Navigation extends Component {
  render() {
    return (
        <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default Navigation;

