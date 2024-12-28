import React from 'react';

const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="size-selector">
      <h2>Select a Size</h2>
      <div className="size-options">
        {['42mm', '46mm'].map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? 'active' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
