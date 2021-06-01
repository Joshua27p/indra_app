import React from 'react'
import Button from 'src/components/Button';
import CarInfoCard from 'src/components/CarInfoCard';
import CoverageServices from 'src/components/CoverageServices';
import ProgressBar from 'src/components/ProgressBar';
import './Coverage.scss';

const Coverage = () => {
  return (
    <div className="coverage">
      <div className="coverage__desktop-content">
        <div>
          <p><span>1</span>Datos del auto</p>
          <p><span>2</span>Arma tu plan</p>
        </div>
      </div>
      <div className="coverage__mobile-content">
        <ProgressBar 
          step="2"
          full
        />
        <div className="coverage__portrait">
          <h1>Mira las coberturas</h1>
          <h2>Conoce las coberturas para tu plan</h2>
          <CarInfoCard />
        </div>
        <div className="coverage__cotization-container">
          <h3>Agrega o quita coberturas</h3>
          <CoverageServices />
        </div>
        <Button 
          label="Lo quiero"
          type="submit"
          col="button__column-2"
          className="button__primary"
        />
      </div>
    </div>
  )
}

export default Coverage
