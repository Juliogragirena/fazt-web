import React, { Fragment } from 'react';
import FaztLogo from '@assets/images/icons/web/faztlogo.svg';
import Skills from '@molecules/Skills';

const ContributorCard = ({ name, charge, image, skills }) => {
  return (
    <div className="contributor__container">
      <div className="contributor__card">
        {image ? (
          <Fragment>
            <div
              className="contributor__backgroundImage"
              style={{
                backgroundImage: `url(${image})`
              }}
            >
              <div className="contributor__blur"></div>
            </div>
            <div className="contributor__img">
              <img src={image} alt="" />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="contributor__noImage"></div>
            <div className="contributor__img" style={{ border: 'none' }}>
              <img src={FaztLogo} alt="" />
            </div>
          </Fragment>
        )}

        <div className="contributor__name">
          <span>{name}</span>
          <p className="contributor__charge">{charge}</p>
        </div>

        <Skills skills={skills} />
      </div>
    </div>
  );
};

export default ContributorCard;
