import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="home-button" to="/" />
        <button className="auth-button">
          <Link to="/login">Login</Link>
        </button>
      </header>
    );
  }
}

export default Header;
