// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import { IconWeb } from '@atoms/Icon';

export default () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <ul>
          <li>Proyectos</li>
          <li>Contribuidores</li>
          <li>Regístrate</li>
        </ul>
      </div>
      <div className="footer__rights">
        <span>All rights reserved</span>
      </div>
      <div className="footer__icons">
        <div className="footer__icons-social">
          <a href="https://discord.gg/37PHuNw" rel="noopener noreferrer" target="_blank">
            <IconWeb name="discord" height="34px" width="34px" />
          </a>
          <div className="footer__icons-social-github">
            <a href="https://github.com/faztcommunity" rel="noopener noreferrer" target="_blank">
              <IconWeb name="github" height="34px" width="34px" />
            </a>
          </div>
        </div>
        <div className="footer__icons-others">
          <IconWeb name="arrowup" height="25px" width="25px" />
        </div>
      </div>
    </div>
  );
};
