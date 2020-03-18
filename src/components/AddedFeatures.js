import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const { car, removeFeature } = props;
  return (
    <div className="content">
      <h6>Added Features:</h6>
      { car.features.length ? (
        <ol>
          { car.features.map( item => (
            <AddedFeature 
              key = { item.id }
              feature = { item }
              removeFeature = { removeFeature } 
            />
          ))}
        </ol>
      ) : (
        <p className="align-center">Add additional bling to your ride ...</p>
      )}
    </div>
  );
};

export default AddedFeatures;