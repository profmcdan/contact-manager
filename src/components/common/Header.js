import React from "react";
import PropTypes from "prop-types";

const Header = ({ branding }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py0">
    <div className="container">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
// const headingStyle = {
//   color: "green",
//   fontSize: "22px",
// };

export default Header;
