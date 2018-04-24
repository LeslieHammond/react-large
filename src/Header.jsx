import React, { Component } from 'react';

class Header extends Component {
  renderLinks() {
    return (
      (Array(9).fill(null)).map((item, i) => {
        return (
          <li key={i}><a>Link {i + 1}</a></li>
        )
      })
    )
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Header</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a>Home</a></li>
            { this.renderLinks() }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
