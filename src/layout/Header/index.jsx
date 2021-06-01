import React from 'react';
import logo from '../../assets/images/logo_rimac.svg';
import phoneIcon from '../../assets/icons/phone.svg'
import { useHistory} from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const history = useHistory();
  
  const goHome = () => (history.push("/"));



  return (
      <div className="header__container">
        <div>
          <button type="button" onClick={goHome}>
            <img src={logo} alt="logo rimac seguros"/>
          </button> 
        </div>
        <div>
          <a className="header__phone" href="/#"><img src={phoneIcon} alt="ícono de teléfono" />Llámanos</a>
        </div>
      </div>
  )
}

export default Header
