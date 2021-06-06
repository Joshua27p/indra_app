import React from 'react';
import './ThankYouPage.scss';
import thankYouImg from '../../assets/images/typage-portrait.png'
import desktopImg from '../../assets/images/typage-portrait-desktop.png'
import Button from 'src/components/Button';
import { useSelector } from 'react-redux';
  
const ThankYouPage = () => {

  const userEmail = useSelector(state => state.user);
  console.log(userEmail ,"checkemail")
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
        <p className="thankyoupage__email">{userEmail?.email}</p>
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
