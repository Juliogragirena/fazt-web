// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/images/faztCommunityIcon.png';
import Btn from '@molecules/Button/index';

function Navigation({ theme }) {
  return (
    <nav className={`navigation navigation${'__' + theme}`}>
      <div className="navigation__area__logo">
        <Link to="/">
          <img className="navigation__logo" src={logo} alt="" />
        </Link>
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className={`navigation__link navigation__link${'__' + theme}`} to="/">
            Incio
          </Link>
        </li>
        <li className="navigation__item">
          <Link className={`navigation__link navigation__link${'__' + theme}`} to="/projects">
            Projectos
          </Link>
        </li>
        <li className="navigation__item">
          <Link className={`navigation__link navigation__link${'__' + theme}`} to="/contributions">
            Contribuidores
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/register">
            <Btn text="Registrarse" type="outline" />
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/login">
            <Btn text="Inciar Sesión" type="primary" />
          </Link>
        </li>
        <li className="navigation__item"></li>
      </ul>
    </nav>
  );
}

export default Navigation;
