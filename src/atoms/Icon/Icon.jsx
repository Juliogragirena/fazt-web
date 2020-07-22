// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import { IconListWeb, IconListCode } from '@assets/lib/LoadIcons';
import React from 'react';

function IconWeb({ name, height, width, theme }) {
  const findIcon = IconListWeb.find((e) => e.name === name);
  return (
    <>
      {findIcon ? (
        <div className={`icon${theme}`}>
          <findIcon.icon height={height} width={width} />{' '}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function IconCode({ name, height, width }) {
  const findIcon = IconListCode.find((e) => e.name === name);

  return <>{findIcon ? <findIcon.icon height={height} width={width} /> : <></>}</>;
}

export { IconWeb, IconCode };
