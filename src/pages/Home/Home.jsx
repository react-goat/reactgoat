import React from 'react';
import styled from 'styled-components';
import PriceCard from '../../components/common/PriceCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <Title>실시간 식재료</Title>
        <MoreLink to="/category">더보기</MoreLink>
      </Header>
      <PriceCard
        name="토마토"
        price="7990"
        change="-30"
        percentage="-0.22"
        imageSrc="/imgs/Tomato.svg"
      />
      <PriceCard
        name="당근"
        price="850"
        change="-50"
        percentage="-1.25"
        imageSrc="/imgs/Carrot.svg"
      />
      <PriceCard
        name="마늘"
        price="5890"
        change="100"
        percentage="1.67"
        imageSrc="/imgs/Garlic.svg"
      />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const MoreLink = styled(Link)`
  font-size: 14px;
  color: #9aa0b4;

  &:hover {
    color: #000;
  }
`;

export default Home;
