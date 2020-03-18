import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';

const AdditionalFeature = props => {
  return (
    <li className="li-style">
      <Button
        color = "success"
        className="button add-button"
        onClick = { () => props.buyFeature(props.feature) }
        >Add</Button>
      {props.feature.name} <i>only ${props.feature.price.toLocaleString()} </i>
    </li>
  );
};

export default AdditionalFeature;
