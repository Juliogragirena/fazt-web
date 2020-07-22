// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import './Button.scss';

export const Button = ({ children, type }) => {
  return <div className={type}>{children}</div>;
};
