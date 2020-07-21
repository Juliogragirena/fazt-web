// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import React from 'react';
import './ProjectCard.scss';
import { IconWeb, IconCode } from '@atoms/Icon/Icon';

export default ({
  id,
  projectName = 'Nombre del Project',
  imageUrl,
  favAmount = '17',
  iconWidth,
  iconHeight,
  projectColor = 'gray'
}) => {
  const bgImage = {
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <article className="project">
      <div className="main-info-project" style={bgImage}>
        <div className="project--items">
          <div className="project--tech project-content">
            <div className="project--tech--item">
              <IconCode name="css3" width={iconWidth} height={iconHeight} />
            </div>
            <div className="project--tech--item">
              <IconCode name="css3" width={iconWidth} height={iconHeight} />
            </div>
            <div className="project--tech--item">
              <IconCode name="css3" width={iconWidth} height={iconHeight} />
            </div>
          </div>
          <div className="project--fav project-content">
            <span className="project-fav-amount">{favAmount}</span>
            <IconWeb name="heart" width={iconWidth} height={iconHeight} />
          </div>
        </div>
      </div>
      <div className="project--name" style={{ backgroundColor: projectColor }}>
        <p>{projectName}</p>
      </div>
    </article>
  );
};
