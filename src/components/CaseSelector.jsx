import React from 'react';

const CaseSelector = ({ selectedCase, setSelectedCase }) => {
  const cases = [
    { id: 1, name: 'Aluminum', image: '/assets/images/aluminum.png' },
    { id: 2, name: 'Titanium', image: '/assets/images/titanium.png' },
  ];

  return (
    <div className="case-selector">
      <h2>Select a Case</h2>
      <div className="case-grid">
        {cases.map((c) => (
          <div
            key={c.id}
            className={`case ${selectedCase === c.id ? 'selected' : ''}`}
            onClick={() => setSelectedCase(c.id)}
          >
            <img src={c.image} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelector;
