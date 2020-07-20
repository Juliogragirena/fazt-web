// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import { IconWeb } from '@atoms/Icon';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/contributions">Contribuidores</Link>
          </li>
          <li>
            <Link to="/">Regístrate</Link>
          </li>
        </ul>
      </div>
      <div className="footer__rights">
        <span>All rights reserved</span>
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
          <IconWeb name="arrowup" height="25px" width="25px" />
        </div>
      </div>
    </div>
  );
};
