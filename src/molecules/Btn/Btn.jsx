// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import './Btn.scss';
// import { Icon } from '../Icon/Icon.jsx';

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


// TODO: Waiting for Icon components merge
export const BtnOutlinePrimaryIcon = ({ text, icon, form, src }) => {
  return (
    <div className="btnOutlinePrimary">
      {/* {(icon || src) && <Icon type={type} icon={icon} size={size} form={form} src={src} />} */}
      <span>{text}</span>
    </div>
  );
};