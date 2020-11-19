import React from 'react'

import logo from '../../assets/logo.png';
import './index.css'
import Deconnexion from '../Deconnexion'

const Header = (props) => {
    return (
        <header className="App-header">
            
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.label}
        </p>
       
       <Deconnexion ></Deconnexion>

      </header>
    )
}

export default Header