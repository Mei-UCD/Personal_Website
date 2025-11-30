import React from 'react';
import travelData from '@/gallery.json';

const TravelGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {travelData.map(country =>
        country.photos.map((photo: string) => (
          <img
            key={photo}
            src={photo}
            alt={country.name}
            className="w-full object-cover rounded"
          />
        ))
      )}
    </div>
  );
};

export default TravelGallery;
