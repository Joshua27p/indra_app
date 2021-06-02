import React from 'react'
import CaptationForm from 'src/components/CaptationForm'
import './Home.scss'


const Home = () => {
  return (
    <div className="home-portrait">
      <div className="home-portrait__container">
        <div className="home-portrait__information">
          <span className="home-portrait__message">!Nuevo¡</span>
          <h1>Seguro Vehicular <br/></h1>
          <p className="home-portrait__question">Cuéntanos dónde le haras seguimiento a tu seguro</p>
        </div>
      </div>
      <section className="captation-form">
        <CaptationForm />
      </section>
    </div>
  )
}

export default Home
