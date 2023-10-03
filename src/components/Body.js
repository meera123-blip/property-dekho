import React, { useState } from 'react';
import Data from '../Data.json';
import Cards from './cards';
import Head from './Head';

const Body = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedLocation, setSelectedLocation] = useState('New York');

  const loadMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  // Filter data based on the selected location
  const filteredData = Data.filter((property) => property.location === selectedLocation);

  return (
    <div>
      <Head onSelectLocation={setSelectedLocation} />
      <div className='flex flex-wrap p-4'>
        {filteredData.slice(0, visibleCount).map((property, index) => (
          <Cards key={index} property={property} filterByLocation={selectedLocation} />
        ))}
      </div>
      {visibleCount < filteredData.length && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
