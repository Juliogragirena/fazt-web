import React, { useState } from 'react';
import './Parallax.scss';
import circuito from '@assets/images/Parallax.png';
import { IconWeb } from '@atoms/Icon/';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import Navegation from '@organism/Navigation';
function Hero() {
  const [containerUp, setcontainerUp] = useState(true);
  const [containerDown, setcontainerDown] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.9
  });

  return (
    <>
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
        <Navegation />
      </CSSTransition>
      <div
        ref={ref}
        className="hero"
        style={{
          background: `url(${circuito})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
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
                <p>boton1</p>
                <p>boton2</p>
              </div>
              <div className="hero_welcome">
                <h1>FAZT TECH</h1>
                <h2>Comunity</h2>
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
              <div className="welcome">
                <h3>Bienvenido a Fazt tech community</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, repellat at similique quod,
                  sequi blanditiis incidunt ullam natus hic minus accusamus, alias cupiditate fugit est? Ea
                  ipsum iusto aspernatur accusantium?
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
