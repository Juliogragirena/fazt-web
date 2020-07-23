/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
import React from 'react';
import PropTypes from 'prop-types';
import { IconCode } from '@atoms/Icon/';
import { usePalette } from 'react-palette';
import notfoundimg from '@assets/images/notfoundimg.jpg';
import notfound from '@assets/images/icons/code/notfound.svg';
import heart from '@assets/images/icons/web/heart.svg';
const CardProject = ({ id, nameProject, imageUrl, arrayProjects, favAmount, size }) => {
  var { data } = usePalette(imageUrl);
  data = data.vibrant;
  if (!imageUrl) {
    data = arrayProjects[0].color;
    imageUrl = notfound;
  }
  var backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  };

  const styleCard = (size) => {
    if (size === 's-card') {
      return {
        fontTitle: 'small',
        fontDesc: 'x-small'
      };
    } else if (size === 'm-card') {
      return {
        fontTitle: 'calc(.2em + 1vw) ',
        fontDesc: 'calc(.1em + 1vw)'
      };
    } else if (size === 'b-card') {
      return {
        fontTitle: 'calc(1em + 1vw)',
        fontDesc: 'calc(.5em + 1vw)'
      };
    } else {
      return {
        fontTitle: 'calc(.2em + 1vw) ',
        fontDesc: 'calc(.1em + 1vw)'
      };
    }
  };

  return (
    <div className="projectCard">
      <div className="projectCard__background" style={backgroundStyle}>
        <div className="projectCard__container">
          <div className="projectCard__container__upSide">
            <div className="projectCard__container__upSide__containerImage">
              <img className="projectCard__container__upSide__containerImage__image" src={imageUrl} alt="" />
            </div>
            <div className="projectCard__container__upSide__containerBar">
              <div className="projectCard__container__upSide__containerBar__icons">
                {arrayProjects.slice(0, 3).map((item, i) => (
                  /*for now the items do not redirect missing add the routes*/
                  <IconCode key={`${item._id}${i}keyICON`} name="notfound" height="100%" />
                ))}
              </div>

              <div className="projectCard__container__upSide__containerBar__fav">
                <span
                  className="projectCard__container__upSide__containerBar__fav__favAmount"
                  style={{ fontSize: styleCard(size).fontDesc }}
                >
                  {favAmount}
                </span>
                <img
                  className="projectCard__container__upSide__containerBar__fav__favIcon"
                  src={heart}
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div
            id={`projectCard__container__downSide-id${id}`}
            className="projectCard__container__downSide"
            onMouseEnter={() => {
              document.getElementById(`projectCard__container__downSide-id${id}`).style.backgroundColor =
                '#DB224A';
              document.getElementById(`projectCard__container__downSide-id${id}`).style.cursor = 'pointer';
            }}
            onMouseLeave={() => {
              document.getElementById(
                `projectCard__container__downSide-id${id}`
              ).style.backgroundColor = data;
            }}
            style={{ backgroundColor: data }}
          >
            <span
              className="projectCard__container__downSide__nameProject"
              style={{ fontSize: styleCard(size).fontTitle }}
            >
              {nameProject}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  id: PropTypes.number,
  size: PropTypes.string,
  theme: PropTypes.string,
  nameProject: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  arrayProjects: PropTypes.array,
  favAmount: PropTypes.string.isRequired
};

CardProject.defaultProps = {
  id: 0,
  nameProject: 'Missing Project',
  imageUrl: notfoundimg,
  arrayProjects: [
    {
      id: '0',
      name: 'NotFound',
      url: 'notfound',
      color: '#E04149'
    },
    {
      id: '1',
      name: 'NotFound',
      url: 'notfound',
      color: '#E04149'
    },
    {
      id: '2',
      name: 'NotFound',
      url: 'notfound',
      color: '#E04149'
    }
  ],
  favAmount: '0',
  size: 'm-card',
  theme: 'white'
};

export default CardProject;
