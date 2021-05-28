import React from 'react';
import logo from '../../assets/images/logo_rimac.svg';
import phoneIcon from '../../assets/icons/phone.svg'
import './Header.scss';


const Header = () => {
  return (
      <div className="header__container">
        <div>
          <img src={logo} alt="logo rimac seguros"/>
        </div>
        <div>
          <a className="header__phone" href="/#"><img src={phoneIcon} alt="ícono de teléfono" />Llámanos</a>
        </div>
      </div>
  )
}

export default Header
