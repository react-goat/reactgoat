// Header.js

import React from 'react';
import PropTypes from 'prop-types';
import '../common/Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <button className="back-button" onClick={() => window.history.back()}>
        &lt;
      </button>
      <h2 className="page-title">{title}</h2>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
