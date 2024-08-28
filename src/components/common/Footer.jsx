import React from 'react';
import Icon1 from '/icons/ingredients.svg';
import Icon2 from '/icons/share.svg';
import Icon3 from '/icons/home.svg';
import Icon4 from '/icons/recipe.svg';
import Icon5 from '/icons/profile.svg';
import './Footer.css';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * 원하는 페이지로 이동하는 Footer 컴포넌트
 * @returns Footer 컴포넌트
 */
const Footer = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="footerWrapper">
      <div className="iconWrapper">
        <img
          onClick={() => {
            nav('/category');
          }}
          className={
            location.pathname.includes('category')
              ? 'currentPage'
              : 'defaultPage'
          }
          src={Icon1}
        />
        <img
          onClick={() => {
            nav('/share');
          }}
          className={
            location.pathname.includes('share') ? 'currentPage' : 'defaultPage'
          }
          src={Icon2}
        />
        <img
          onClick={() => {
            nav('/');
          }}
          className={location.pathname === '/' ? 'currentPage' : 'defaultPage'}
          src={Icon3}
        />
        <img
          onClick={() => {
            nav('/recipe');
          }}
          className={
            location.pathname.includes('recipe') ? 'currentPage' : 'defaultPage'
          }
          src={Icon4}
        />
        <img
          onClick={() => {
            nav('/my');
          }}
          className={
            location.pathname.includes('my') ? 'currentPage' : 'defaultPage'
          }
          src={Icon5}
        />
      </div>
    </div>
  );
};

export default Footer;
