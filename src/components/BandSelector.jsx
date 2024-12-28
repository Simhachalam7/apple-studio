import React from 'react';

const BandSelector = ({ selectedBand, setSelectedBand }) => {
  const bands = [
    { id: 1, name: 'Solo Loop', image: '/assets/images/solo-loop.png' },
    { id: 2, name: 'Braided Loop', image: '/assets/images/braided-loop.png' },
  ];

  return (
    <div className="band-selector">
      <h2>Select a Band</h2>
      <div className="band-carousel">
        {bands.map((b) => (
          <div
            key={b.id}
            className={`band ${selectedBand === b.id ? 'selected' : ''}`}
            onClick={() => setSelectedBand(b.id)}
          >
            <img src={b.image} alt={b.name} />
            <p>{b.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandSelector;
