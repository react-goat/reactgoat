import React from 'react';
import styled from 'styled-components';

/**
 * PriceCard 컴포넌트
 * @param {string} props.name - 상품 이름
 * @param {number} props.price - 상품 가격
 * @param {number} props.change - 가격 변화량
 * @param {number} props.percentage - 변화율 (퍼센트)
 * @param {string} props.imageSrc - 상품 이미지 URL
 * @returns {JSX.Element} 상품 정보를 보여주는 카드 컴포넌트
 */

const PriceCard = ({ name, price, change, percentage, imageSrc }) => {
  const isPositive = change > 0;

  return (
    <PriceCardContainer>
      <PriceCardContent>
        <Icon src={imageSrc} alt={name} />
        <Name>{name}</Name>
        <PriceChangeContainer>
          <Price>{price}원</Price>
          <Change isPositive={isPositive}>
            {isPositive ? '▲' : '▼'} {Math.abs(change)}원{' '}
            {isPositive ? '+' : ''}
            {percentage}%
          </Change>
        </PriceChangeContainer>
      </PriceCardContent>
    </PriceCardContainer>
  );
};

const PriceCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  max-width: 330px;
  height: 90px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const PriceCardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
`;

const PriceChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: black;
`;

const Change = styled.div`
  font-size: 16px;
  margin-top: 4px;
  color: ${(props) => (props.isPositive ? '#F00' : '#00F')};
`;

export default PriceCard;
