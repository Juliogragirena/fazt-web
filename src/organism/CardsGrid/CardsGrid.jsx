/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
/**
 * <Component for showing details of the proyect>
 * @component
 * @param   {String}    size            Size of Card (Small / Medium / Big)
 * @param   {String}    theme           Theme of Component (For Future implementations)
 * @param   {String}    nameProject     Name of Proyect
 * @param   {String}    imageUrl        Url Of Image Proyect
 * @param   {Array}     arrayProjects   Array of Technologies
 * @param   {Number}    favAmount       Amount of Favorites
 * @return  {<CardProyect>}
 */
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardProject from '@molecules/CardProject';
import Button from '@molecules/Button';
function CardsGrid() {
  const [Data, setData] = useState([]);
  const [Fetch, setFetch] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('https://www.apiproyect/api', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFetch(true);
      })
      .catch((error) => {
        setData([
          {
            _id: 0,
            nameProject: 'Web Project'
          },
          { _id: 1, nameProject: 'Api Project' },
          { _id: 2 },
          { _id: 3 },
          { _id: 4 },
          { _id: 5 },
          { _id: 6 },
          { _id: 7 },
          { _id: 8 }
        ]);
        /*Change to false to dont see the test view */
        setFetch(true);
      });
  }, []);

  return (
    <div className="containerGrid">
      <div className="containerGrid__titleGrid">
        <span className="containerGrid__titleGrid-t1">NUESTROS </span>
        <span className="containerGrid__titleGrid-t2">PROYECTOS</span>
      </div>
      <div className="containerGrid__cardsGrid">
        {Fetch ? (
          <>
            <TransitionGroup
              appear={true}
              enter={false}
              exit={false}
              className="containerGrid__cardsGrid__primary"
            >
              {Data.slice(0, 1).map((item) => (
                <CSSTransition key={`${item._id}keyCSST1`} timeout={1500} classNames="item">
                  <CardProject
                    key={`${item._id}keyCSST1CARD`}
                    id={item._id}
                    nameProject={item.nameProject}
                    imageUrl={item.imageUrl}
                    favAmount={item.favAmount}
                    arrayProyects={item.arrayProyects}
                    size={'b-card'}
                    theme={'white'}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>

            <TransitionGroup
              appear={true}
              enter={false}
              exit={false}
              className="containerGrid__cardsGrid__secondary"
            >
              {Data.slice(1, 9).map((item) => (
                <CSSTransition key={`${item._id}keyCSST2`} timeout={1500} classNames="item">
                  <CardProject
                    id={item._id}
                    nameProject={item.nameProject}
                    imageUrl={item.imageUrl}
                    favAmount={item.favAmount}
                    arrayProyects={item.arrayProyects}
                    size={'m-card'}
                    theme={'white'}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </>
        ) : (
          <>
            <span className="containerGrid__cardsGrid-textError">Error al cargar Proyectos</span>
          </>
        )}
      </div>
      <div className="containerGrid__buttonGrid">
        <Button type="primary">
          <span>Ver Proyectos</span>
        </Button>
      </div>
    </div>
  );
}

export default CardsGrid;
