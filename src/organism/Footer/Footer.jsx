// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import { IconWeb } from '@atoms/Icon';

export default () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href=" ">Proyectos</a>
          </li>
          <li>
            <a href=" ">Contribuidores</a>
          </li>
          <li>
            <a href=" ">Regístrate</a>
          </li>
        </ul>
      </div>
      <div className="footer__rights">
        <span>All Right Reserve</span>
      </div>
      <div className="footer__icons">
        <div className="footer__icons-social">
          <a href="https://discord.gg/37PHuNw" target="noopener">
            <IconWeb name="discord" height="34px" width="34px" />
          </a>
          <div className="footer__icons-social-github">
            <a href="https://github.com/faztcommunity" target="noopener">
              <IconWeb name="github" height="34px" width="34px" />
            </a>
          </div>
        </div>
        <div className="footer__icons-others">
          <IconWeb name="arrow" height="25px" width="25px" />
        </div>
      </div>
    </div>
  );
};
