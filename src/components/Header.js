import React from 'react';
import { CardTitle, CardText, CardImg } from 'reactstrap';

const Header = props => {
  return (
    <>
      <CardTitle>{props.car.name}</CardTitle>
      <CardImg top width="100%" src={props.car.image} alt={props.car.name} />
      <CardText>Amount: ${props.car.price.toLocaleString()}</CardText>
    </>
  );
};

export default Header;

