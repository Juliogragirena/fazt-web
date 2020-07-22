// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import communityLogo from '../../assets/images/faztCommunityIcon.svg';
import menuLogo from '../../assets/images/menu-icon.svg';
import React from 'react';

function Navigation() {
  const [show, setShow] = React.useState(true);
  return (
    <header className="navigation--container">
      <div className="navigation--items-left">
        <img src={communityLogo} alt="logo-comunidad" title="Fazt Community" className="navigation--logo" />
        <nav>
          <ul className="menu--container--left">
            <li className="menu--item">Proyectos</li>
            <li className="menu--item">Contribuidores</li>
          </ul>
        </nav>
      </div>
      <p>Fazt Community</p>
      <div className="navigation--items--right">
        <nav className="navigation--menu--items">
          <button tabIndex="0" className="navigation--items--buttton" onClick={() => setShow(!show)}>
            <img src={menuLogo} alt="" className="navigation--items--img" />
          </button>
        </nav>
        <div className={`navigation-items-container ${show ? 'show' : 'hide'}`}>
          <button className="navigation--button navigation--button-ghost">Registrarme</button>
          <button className="navigation--button navigation--button--cta">Inicia Sesión</button>
          <nav>
            <ul className="menu--container--right">
              <li className="menu--item">Proyectos</li>
              <li className="menu--item">Contribuidores</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
