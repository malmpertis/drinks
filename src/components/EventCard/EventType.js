import React from 'react';
import styled from 'styled-components';
import CoctailImg from '../../assets/cocktail-icon.png';
import BeerImg from '../../assets/beer-icon.png';
import CoffeeImg from '../../assets/coffee-icon.png';
import MilkshakeImg from '../../assets/milkshake-icon.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 56px;
  color: ${({ theme }) => theme.tColors.palette.secondary.main};
  img {
    height: 50px;
    margin: auto;
  }
`;

const EventType = ({ type }) => {
  const SelectIcon = () => {
    switch (type) {
      case 'COCKTAILS':
        return <img src={CoctailImg} alt="event icon" />;
      case 'COFFEES':
        return <img src={CoffeeImg} alt="event icon" />;
      case 'MILKSHAKES':
        return <img src={MilkshakeImg} alt="event icon" />;
      case 'BEERS':
      default:
        return <img src={BeerImg} alt="event icon" />;
    }
  };

  return (
    <Container>
      <SelectIcon />
    </Container>
  );
};

export default EventType;
