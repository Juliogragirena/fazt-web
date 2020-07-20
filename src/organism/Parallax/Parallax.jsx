import React from 'react';
import './Parallax.scss';
import circuito from '@assets/images/Parallax.png';
import { IconWeb } from '@atoms/Icon/';

function Hero() {
  React.useEffect(() => {
    const $hero = document.querySelector('.hero');
    const $prueba2 = document.querySelector('.prueba2');
    const $hero_arrow = document.querySelector('.hero_arrow');
    const $hero_welcome = document.querySelector('.hero_welcome');
    const $welcome = document.querySelector('.welcome');
    const options = {
      // root: document.querySelector('body'),
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.8
    };
    function callback(entries, observer) {
      if (entries[0].isIntersecting) {
        $prueba2.style.animation = 'fadeout ease .5s';
        $prueba2.style.display = 'none';
        $welcome.style.display = 'none';
        $hero_arrow.style.display = 'flex';
        $hero_welcome.style.display = 'flex';
      } else {
        $prueba2.style.display = 'flex';
        $prueba2.style.animation = 'fadein ease .5s';
        $welcome.style.display = 'flex';
        $hero_arrow.style.display = 'none';
        $hero_welcome.style.display = 'none';
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe($hero);
  }, []);
  return (
    <div>
      <div className="prueba2"></div>
      <div
        className="hero"
        style={{
          background: `url(${circuito})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="hero_buttons">
          <p>boton1</p>
          <p>boton2</p>
        </div>
        <div className="hero_welcome">
          <h1>FAZT TECH</h1>
          <h2>Comunity</h2>
        </div>
        <div className="welcome">
          <h3>Bienvenido a Fazt tech community</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, repellat at similique quod, sequi
            blanditiis incidunt ullam natus hic minus accusamus, alias cupiditate fugit est? Ea ipsum iusto
            aspernatur accusantium?
          </p>
        </div>
        <div className="hero_arrow">
          <IconWeb
            name="arrow"
            width="100%"
            filter=" invert(100%) sepia(0%) saturate(0%) hue-rotate(46deg) brightness(100%) contrast(103%)"
          />
        </div>
      </div>
      <div className="prueba"></div>
      <div className="prueba"></div>
      <div className="prueba"></div>
      <div className="prueba"></div>
      <div className="prueba"></div>
    </div>
  );
}

export default Hero;
