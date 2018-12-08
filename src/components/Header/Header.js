import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <button className="home-button">
          <Link to="/">Back</Link>
        </button>
      </header>
    );
  }
}

export default Header;
