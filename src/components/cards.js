import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ property  }) => {
  return (
    <>
    {(
    <div className="w-1/3 p-2">
      <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={property.img} // Replace with the actual image URL
          alt={property.location}
        />
        <div className='m-3'>{property.location}</div>
        <div>
          <h2 className="text-xl font-semibold p-3">{property.property_name}</h2>
        </div>
        <div className="flex p-4">
          <p className="text-gray-600 mr-2">{property.number_of_rooms} Rooms</p>
          <p className="text-gray-600 mr-2">{property.number_of_beds} Beds</p>
          <p className="text-gray-600 mr-2">{property.number_of_bathrooms} Bath</p>
          <p className="text-gray-600 mr-2">{property.dimensions}</p>
        </div>
        <div className="flex justify-between items-center p-2 m-2">
          <p className="text-gray-600">${property.rent_per_month}/month</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
           <Link to={`/properties/${property.id}`}>Show more</Link> 
          </button>
        </div>
      </div>
    </div>
    )}
    </>

  );
};

export default Cards;
