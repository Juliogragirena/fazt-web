// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';

export default ({ src, name, classes = '', size = '' }) => {
  if (!name) {
    return <img className={`icon ${classes}`} src={src} alt="icon" />;
  } else {
    return <i className={`fas fa-${name} ${size} ${classes} icon `} />;
  }
};
