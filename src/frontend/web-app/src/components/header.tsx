import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import FormButtons from './form-buttons';
  import HomeButton from './home-button';
  /* import Home from './components/home'; */
  import img from '../img/oplog-logo.png';
import { logDOM } from '@testing-library/dom';

  function Header() {
    return (
      <header className="header">
        <div className="header-container">
          <a href="https://oplog.com.tr/en/" className="header-img">
            <img src={img}></img>
          </a>
          <div className="header-navigation">
            <a href="#home">Home</a>
            <a href="#forms">Forms</a>
            <a href="#candidates">Candidates</a>
          </div>
        </div>
      </header>
    );
  }

  export default Header;