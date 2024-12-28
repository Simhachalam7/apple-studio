import React, { useState } from 'react';
import CaseSelector from '../components/CaseSelector';
import SizeSelector from '../components/SizeSelector';
import BandSelector from '../components/BandSelector';
import CollectionSwitcher from '../components/CollectionSwitcher';
import PriceSummary from '../components/PriceSummary';

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('Series 10');

  return (
    <div className="customization-page">
      <CollectionSwitcher
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />
      <CaseSelector selectedCase={selectedCase} setSelectedCase={setSelectedCase} />
      <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <BandSelector selectedBand={selectedBand} setSelectedBand={setSelectedBand} />
      <PriceSummary selectedCase={selectedCase} selectedSize={selectedSize} selectedBand={selectedBand} />
    </div>
  );
};

export default CustomizationPage;
