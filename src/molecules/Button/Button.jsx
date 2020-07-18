// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import './Button.scss';

export const BtnPrimary = ({ text }) => {
  return (
    <div className="btnPrimary">
      <span>{text}</span>
    </div>
  );
};

export const BtnOutlinePrimary = ({ text }) => {
  return (
    <div className="btnOutlinePrimary">
      <span>{text}</span>
    </div>
  );
};
