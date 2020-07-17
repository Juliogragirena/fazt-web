// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import { BtnPrimary, BtnOutlinePrimary, BtnOutlinePrimaryIcon } from '../../molecules/Btn/Btn';

function Main() {
  return (
    <div>
      Landing Page
      <BtnPrimary text="Registrarse" />
      <br/>
      <BtnOutlinePrimary text="Registrarse" />
      <br/>
      <BtnOutlinePrimaryIcon text="Registrarse" />
    </div>
  );
}

export default Main;
