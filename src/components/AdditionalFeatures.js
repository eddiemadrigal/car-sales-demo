import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { CardTitle } from 'reactstrap';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <CardTitle>Additional Features</CardTitle>
      { props.store.length ? (
        <ol type="1">
          {props.store.map( item => (
            <AdditionalFeature
              key = { item.id }
              feature = { item }
              buyFeature = { props.buyFeature }
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      ) }
    </div>
  );
};

export default AdditionalFeatures;