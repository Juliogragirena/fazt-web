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
            name="La azaña"
            charge="Frontend"
            image="https://images-ext-1.discordapp.net/external/9nfLNo9t4BgJhWU3VmT0gDnDHfUqVa2NpkqDkvWqzeY/https/i.gifer.com/3ZWo.gif"
          />
          <ContributorCard
            skills={{ skill1: 'react', skill2: 'docker', skill3: 'nodejs' }}
            name="Joe Doe"
            charge="diseño"
            image="https://images-ext-2.discordapp.net/external/FyjRtTFylRVO7S41MCYPMHBZqX0wPOCN5hYkPUarWXQ/%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1549068106-b024baf5062d?width=250&height=375"
          />
          <ContributorCard
            skills={{ skill1: 'php', skill2: 'java', skill3: 'nodejs' }}
            name="DonBigotes"
            charge="backend"
            image="https://images-ext-2.discordapp.net/external/tWRnfAUlOqlIbKH6ggqzdYWqsv2TmNmR5aovy5b8t58/%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1593789382576-54f489574d26"
          />
          <ContributorCard
            skills={{ skill1: 'react', skill2: 'redux', skill3: 'nodejs' }}
            name="MiaN4"
            charge="FullStack"
            image="https://images-ext-2.discordapp.net/external/Njoy0rajYjATc6LBR9nWHm9noJQZQGqDp3jmsI9DpRo/https/mui.today/__export/1588279779766/sites/mui/img/2020/04/30/dt_common_streams_streamserver_cls.jpg_1466020059.jpg?width=586&height=586"
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
