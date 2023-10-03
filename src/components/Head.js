import React, { useState } from 'react';

const Head = ({ onSelectLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState("New York");

  const handleLocationClick = (location) => {
    onSelectLocation(location);
    setSelectedLocation(location);
  };

  return (
    <div className="m-2 p-8">
      <button
        onClick={() => handleLocationClick('New York')}
        className={`${
          selectedLocation === 'New York'
            ? 'bg-blue-500 text-white'
            : 'bg-blue-100 text-black'
        } font-bold py-2 px-4 rounded m-2`}
      >
        New York
      </button>
      <button
        onClick={() => handleLocationClick('Paris')}
        className={`${
          selectedLocation === 'Paris'
            ? 'bg-blue-500 text-white'
            : 'bg-blue-100 text-black'
        } font-bold py-2 px-4 rounded m-2`}
      >
        Paris
      </button>
      <button
        onClick={() => handleLocationClick('Mumbai')}
        className={`${
          selectedLocation === 'Mumbai'
            ? 'bg-blue-500 text-white'
            : 'bg-blue-100 text-black'
        } font-bold py-2 px-4 rounded m-2`}
      >
        Mumbai
      </button>
    </div>
  );
};

export default Head;
