import React from 'react';
import heart from '/icons/heart.svg';
import mockImg from '/images/mockImg.png';
import './RecipeBlock.css';

const RecipeBlock = () => {
  return (
    <div
      className="blockWrapper"
      style={{ backgroundImage: `url(${mockImg})` }}
    >
      <div className="textWrapper">
        <div className="title">토마토달걀볶음</div>
        <div className="subtextWrapper">
          <img src={heart} alt="" className="heartImg" />
          <div className="likeCount">329</div>
          <div className="level">중수</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBlock;
