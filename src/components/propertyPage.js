import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data.json';
import Cards from './cards'; 

const PropertyPage = () => {
  const { id } = useParams();

  // Find the property with the matching 'id' from the 'Data' array
  const property = Data.find((property) => property.id === parseInt(id, 10));

  if (!property) {
    // Handle the case where the property with the given 'id' is not found
    return <div>Property not found</div>;
  }

  return (
    <div className="flex flex-wrap p-4">
      <Cards property={property} />
    </div>
  );
};

export default PropertyPage;
