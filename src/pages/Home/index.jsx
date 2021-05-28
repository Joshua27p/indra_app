import React from 'react'
import CaptationForm from 'src/components/CaptationForm'
import './Home.scss'


const Home = () => {
  return (
    <div className="home">
      <div className="home__portrait">
        <span>!Nuevo¡</span>
        <h1>Seguro Vehicular <br/></h1>
        <p>Cuéntanos dónde le haras seguimiento a tu seguro</p>
      </div>
      <section className="captation-form">
        <CaptationForm />
      </section>
    </div>
  )
}

export default Home
