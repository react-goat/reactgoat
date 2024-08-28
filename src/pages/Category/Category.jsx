import React from 'react';
import Header from '../../components/common/Header'; // Header 컴포넌트를 import 합니다.
import OneFood from '../../components/common/OneFood';
import './Category.css';
const Category = () => {
  return (
    <>
      <Header title="채소 & 과일" />
      <div className="food-container">
        <OneFood
          title="곰곰 대추방울 토마토 5kg"
          imageUrl="../public/icons/토마토.png" // 이미지 파일 경로
        />
        <OneFood
          title="곰곰 대추방울 토마토 10kg"
          imageUrl="../public/icons/토마토.png" // 이미지 파일 경로
        />
        <OneFood
          title="곰곰 대추방울 토마토 15kg"
          imageUrl="../public/icons/토마토.png" // 이미지 파일 경로
        />
      </div>
    </>
  );
};

export default Category;
