import React from 'react'
import CarInfoCard from 'src/components/CarInfoCard';
import CoverageServices from 'src/components/CoverageServices';
import ProgressBar from 'src/components/ProgressBar';
import './Coverage.scss';

const Coverage = () => {
  return (
    <div className="coverage container">
      <ProgressBar 
        step="2"
        full
      />
      <div className="coverage__portrait">
        <h1>Mira las coberturas</h1>
        <h2>Conoce las coberturas para tu plan</h2>
        <CarInfoCard />
      </div>
     
      <div>
        <h3>Agrega o quita coberturas</h3>
        <CoverageServices />
      </div>
    </div>
  )
}

export default Coverage
