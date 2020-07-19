// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import React from 'react';
import Icon from '@atoms/Icon';
import './ProjectCard.scss';

export default ({ id, projectName = 'Nombre del Project', imageUrl, favAmount = '17', size }) => {
  const backgroundImages = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
    backgroundSize: 'cover'
  };
  return (
    <article className="project">
      <div className="main-info-project" style={backgroundImages}>
        <div className="project--items">
          <div className="project--tech project-content">
            <Icon name="css3-alt" classes="project--tech" size={size} />
            <Icon name="css3-alt" classes="project--tech" size={size} />
            <Icon name="css3-alt" classes="project--tech" size={size} />
          </div>
          <div className="project--fav project-content">
            <span className="project-fav-amount">{favAmount}</span>
            <Icon name="heart" />
          </div>
        </div>
      </div>
      <div className="project--name">
        <p>{projectName}</p>
      </div>
    </article>
  );
};
