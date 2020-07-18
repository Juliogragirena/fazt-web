// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import './Button.scss';
import Icon from 'atoms/Icon/Icon';

export const ButtonPrimary = ({ text, src, name, classes, size }) => {
  return (
    <div className="btnPrimary ">
      {(name || src) && <Icon src={src} name={name} size={size} classes={classes} />}
      <span>{text}</span>
    </div>
  );
};

export const ButtonOutlinePrimary = ({ text, src, name, classes, size }) => {
  return (
    <div className="btnOutlinePrimary ">
      {(name || src) && <Icon src={src} name={name} size={size} classes={classes} />}
      <span>{text}</span>
    </div>
  );
};
