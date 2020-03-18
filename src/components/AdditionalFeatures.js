import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { CardTitle } from 'reactstrap';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <CardTitle>Additional Features</CardTitle>
      { props.store.length ? (
        <ol>
          {props.store.map( item => (
            <AdditionalFeature
              key = { item.id }
              feature = { item }
              buyFeature = { props.buyFeature }
            /> 
          ))}
        </ol>
      ) : (
        <p>Sexy looking car!</p>
      ) }
    </div>
  );
};

export default AdditionalFeatures;