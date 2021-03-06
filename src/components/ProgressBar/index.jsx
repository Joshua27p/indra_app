import React from 'react'
import './ProgressBar.scss'
import backIcon from '../../assets/icons/icon_back.svg'

const ProgressBar = ({step, full}) => {
  return (
    <div className="welcome-progress">
      <span className="welcome-progress__steps"><img src={backIcon} alt="icon atras" />  paso <spa>{step}</spa> de 2 </span>
      <div className="welcome-progress__progressbar-bg">
        <div className={`welcome-progress__progressbar-bar ${full&& 'full'}` }></div>   
      </div>
    </div>
  )
}

export default ProgressBar;
