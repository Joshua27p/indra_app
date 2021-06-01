import React from 'react';
import './ThankYouPage.scss';
import thankYouImg from '../../assets/images/typage-portrait.png'
import desktopImg from '../../assets/images/typage-portrait-desktop.png'
import Button from 'src/components/Button';
  
const ThankYouPage = () => {
  const email = "josel_Sanchez@gmail.com"

  return (
    <div className="thankyoupage">
      <div className="thankyoupage-dekstop__bg">
        <img className="thankyoupage-desktop__img" src={desktopImg} alt="portrait dekstop"/>
      </div>
      <img className="thankyoupage-mobile__img" src={thankYouImg} alt="portrait" />
      <div className="thankyoupage__container">
        <h1>¡Te damos la bienvenida</h1>
        <p className="thankyoupage__subtitle">Cuenta con nosotros para proteger tu vehículo</p>
        <p className="thankyoupage__info">Enviaremos la información de compra de tu Plan Vehicular Tracking a tu correo</p>
        <p className="thankyoupage__email">{email}</p>
        <Button 
          className="button__lg"
          type="submit"
          label="CÓMO USAR MI SEGURO"
        />
      </div>
    </div>
  )
}


export default ThankYouPage;
