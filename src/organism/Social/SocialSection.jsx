// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import React from 'react';
import './SocialSection.scss';
import Button from '../../molecules/Button';
import { IconWeb } from '../../atoms/Icon';

export const SocialSection = () => {
  return (
    <section className="container">
      <p className="container__title">
        <span className="container__highlight">Únete</span> a nuestro <strong>Discord</strong> y&nbsp;
        <span className="container__highlight">visita</span> nuestro perfil de <strong>GitHub</strong>
      </p>
      <p className="container__subtitle"></p>
      <div className="container-social">
        <div className="container-social__discord">
          <a href="https://discord.gg/37PHuNw" rel="noopener noreferrer" target="_blank">
            <IconWeb name="discord" height="75px" width="75px" theme="normal" />
            <Button type="primary">
              <span>ÚNETE</span>
            </Button>
          </a>
        </div>

        <div className="container-social__github">
          <a href="https://github.com/faztcommunity" rel="noopener noreferrer" target="_blank">
            <IconWeb name="github" height="75px" width="75px" theme="normal" />
            <Button type="outline">
              <span>VISÍTANOS</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
