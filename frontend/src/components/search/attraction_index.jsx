import React from 'react';
import AttractionIndexItem from './attraction_index_item';

const AttractionIndex = ({ attractions }) => (
  <div>
    <h1>Attraction: </h1>
    {attractions.map(bench => (
      <AttractionIndexItem
        attraction={attraction}
        key={attraction.id}
      />
    ))}
  </div>
);

export default AttractionIndex;
