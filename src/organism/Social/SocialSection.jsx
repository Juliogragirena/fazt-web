// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import React from 'react';
import './SocialSection.scss';
import Button from '../../molecules/Button';
import { IconWeb } from '../../atoms/Icon';

export const SocialSection = () => {
  return (
    <section className="container">
      <p className="container__title">
        <span className="container__highlight">Únete</span> a nuestro Discord y{' '}
        <span className="container__highlight">visita</span> nuestro perfil de GitHub
      </p>
      <p className="container__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vita quam elementum congue magna
        eget,pulvinar velit.
      </p>
      <div className="container-social">
        <div className="container-social__discord">
          <IconWeb name="discord" height="75px" width="75px" theme="normal" />

          <Button text="ÚNETE" type="primary" />
        </div>

        <div className="container-social__github">
          <IconWeb name="github" height="75px" width="75px" theme="normal" />
          <Button text="VISÍTANOS" type="outline" />
        </div>
      </div>
    </section>
  );
};
