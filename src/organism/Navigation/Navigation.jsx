// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import Btn from '@molecules/Button/index';

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"></li>
        <li className="navigation__item"></li>
        <li className="navigation__item"></li>
        <li className="navigation__item"></li>
        <li className="navigation__item">
          <Btn text="Registrarse" type="outline" />
        </li>
        <li className="navigation__item"></li>
      </ul>
    </div>
  );
}

export default Navigation;
