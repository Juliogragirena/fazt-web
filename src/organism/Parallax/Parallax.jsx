import React, { useState } from 'react';
import './Parallax.scss';
import { IconWeb } from '@atoms/Icon/';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import Navegation from '@organism/Navigation';
import Typewritter from '@atoms/Typewriter';
import Button from '@molecules/Button';

function Hero() {
  const [containerUp, setcontainerUp] = useState(true);
  const [containerDown, setcontainerDown] = useState(false);
  const texts = ['Community ', 'Únete a nosotros'];
  const [ref, inView] = useInView({
    threshold: 0.9
  });

  return (
    <>
      <div ref={ref} className="hero">
        <CSSTransition
          in={inView && containerUp}
          unmountOnExit
          classNames="fade"
          timeout={300}
          onExited={() => {
            setcontainerDown(true);
            setcontainerUp(false);
          }}
        >
          {
            <div className="hero_container-up">
              <div className="hero_buttons">
                <Button type="outline">
                  <IconWeb name="discord" width="2rem" />
                  <span>Discord</span>
                </Button>
                <Button type="outline">
                  <IconWeb name="github" width="2rem" />
                  <span>Github</span>
                </Button>
              </div>
              <div className="hero_welcome">
                <h1>FAZT TECH</h1>
                <Typewritter texts={texts} />
              </div>
              <div className="hero_arrow">
                <IconWeb
                  name="arrow"
                  width="100%"
                  filter=" invert(100%) sepia(0%) saturate(0%) hue-rotate(46deg) brightness(100%) contrast(103%)"
                />
              </div>
            </div>
          }
        </CSSTransition>

        <CSSTransition
          in={!inView && containerDown}
          unmountOnExit
          classNames="fade"
          timeout={300}
          onExited={() => {
            setcontainerDown(false);
            setcontainerUp(true);
          }}
        >
          {
            <div className="hero_container-down">
              <Navegation />
              <div className="welcome">
                <h3>Bienvenido a Fazt tech community</h3>
                <p>
                  Fazt community es una espacio donde se reúnen desarrolladores y diseñadores de habla
                  hispana. Un lugar donde puedes aprender, pasarla bien y mejorar tus habilidades.
                </p>
              </div>
            </div>
          }
        </CSSTransition>
      </div>
    </>
  );
}

export default Hero;
