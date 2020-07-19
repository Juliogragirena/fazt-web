// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import './Button.scss';
import {IconWeb} from 'atoms/Icon/Icon';

export const Button = ({ text, type, src, name, classes, size }) => {
  return (
    <div className={type}>
      {(name || src) && <IconWeb src={src} name={name} size={size} classes={classes} />}
      <span>{text}</span>
    </div>
  );
};
