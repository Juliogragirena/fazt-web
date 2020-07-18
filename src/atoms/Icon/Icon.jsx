// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';

export default ({ src, icon, form, type, size }) => {
  if (!icon) {
    return <img className={`icon ${form}`} src={src} alt="icon" />;
  } else {
    return <i className={`${type} ${icon} ${size} ${form} icon `} />;
  }
};
