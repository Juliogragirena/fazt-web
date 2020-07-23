// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
//import Navigation from '@organism/Navigation/Navigation';
import Parallax from '@organism/Parallax';
import CardsGrid from '@organism/CardsGrid';
import { SocialSection } from '@organism/Social/SocialSection';
import Footer from '@organism/Footer';
import ContributorCard from '@organism/Cards/ContributorCard';

function Main() {
  return (
    <>
      <div className="Landing">
        <Parallax />
        <CardsGrid />
        <div className="InfoContributors">
          <h4>Contribuidores</h4>
          <p>
            Estos son solo algunos de los miembros de nuestra comunidad. Gracias a ellos se han podido
            desarrollar los diferentes proyectos. Anímate y súmate a la comunidad.
          </p>
        </div>
        <div className="Contributors">
          <ContributorCard
            skills={{ skill1: 'css3', skill2: 'html5', skill3: 'javascript' }}
            name="Axel"
            charge="Frontend"
            image="https://cdn.discordapp.com/attachments/734160697075695636/735666606104903744/IMG_20200722_200631.png"
          />
          <ContributorCard
            skills={{ skill1: 'react', skill2: 'docker', skill3: 'nodejs' }}
            name="Joe Doe"
            charge="diseño"
            image="https://images-ext-2.discordapp.net/external/FyjRtTFylRVO7S41MCYPMHBZqX0wPOCN5hYkPUarWXQ/%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1549068106-b024baf5062d?width=250&height=375"
          />
          <ContributorCard
            skills={{ skill1: 'php', skill2: 'java', skill3: 'nodejs' }}
            name="Alex"
            charge="FullStack"
            image="https://cdn.discordapp.com/attachments/734160697075695636/735666599968768051/IMG_-2imdqa.jpg"
          />
          <ContributorCard
            skills={{ skill1: 'react', skill2: 'redux', skill3: 'nodejs' }}
            name="Jenny Winternswitch"
            charge="FullStack"
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="Social">
          <SocialSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
