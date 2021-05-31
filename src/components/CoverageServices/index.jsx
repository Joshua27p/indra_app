import React from 'react'
import './CoverageServices.scss'
import wheelImg from '../../assets/images/services-wheel.svg'
import crashImg from '../../assets/images/services-crash.svg'
import motorWay from '../../assets/images/services-motorway.svg'
import ServicesCard from '../ServicesCard'
import Button from '../Button'

const CoverageServices = () => {
  return (
    <div className="services">
      <div className="services-tab__container">
        <button className="services-tab__first">Protege a tu auto</button>
        <button className="services-tab__second">Protege a los que te rodean</button>
        <button className="services-tab__third">Mejora tu plan</button>
      </div>
      <ServicesCard 
        img={wheelImg}
        service="Llanta Robada"
        text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis"
        id="wheel"
      />
      <ServicesCard
        img={crashImg}
        service="choque y/o pasarte luz roja"
        text="ver más"
        id="choque"
      />
      <ServicesCard
        img={motorWay}
        service="choque y/o pasarte luz roja"
        text="ver más"
        id="motorway"
      />
      <div className="services-amount__container">
        <div>
          <p>$35.00</p>
          <p>mensual</p>
        </div>
        <Button 
        label="Lo quiero"
        type="submit"
        />
      </div>

    </div>
    
  )
}

export default CoverageServices
