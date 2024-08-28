// oneFood.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './oneFood.css'; // CSS 파일 import

const OneFood = ({ title, imageUrl }) => {
  return (
    <div className="one-food">
      <img src={imageUrl} alt={title} className="food-image" />
      <div className="food-title">{title}</div>
    </div>
  );
};

OneFood.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default OneFood;
