import React from 'react';

const PriceSummary = ({ selectedCase, selectedSize, selectedBand }) => {
  const basePrice = 399;
  const casePrice = selectedCase === 1 ? 50 : 100; // Example pricing
  const sizePrice = selectedSize === '46mm' ? 30 : 0;

  const totalPrice = basePrice + casePrice + sizePrice;

  return (
    <div className="price-summary">
      <h2>Total Price</h2>
      <p>${totalPrice}</p>
    </div>
  );
};

export default PriceSummary;
