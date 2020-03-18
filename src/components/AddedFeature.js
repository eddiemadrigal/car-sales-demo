import React from 'react';
import { Button } from 'reactstrap';

const AddedFeature = props => {
  return (
    <li className="li-style">
      <Button 
        color="danger"
        className="button add-button"
        onClick = { () => props.removeFeature(props.feature) }
        >X</Button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;