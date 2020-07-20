/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React, { useEffect, useState } from 'react';
import './Typewriter.scss';

const Typewritter = ({ texts }) => {
  const [mounted, setMounted] = useState(false);
  const [typing, setTyping] = useState('');

  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  let deleteTxt = false;
  let time = 200;
  let writing = 200;

  useEffect(() => {
    if (mounted) {
      type();
    } else {
      setMounted(true);
    }
    // eslint-disable-next-line
  }, [mounted]);

  const type = () => {
    if (count === texts.length) {
      count = 0;
    }
    currentText = typeof texts[count] === 'string' ? texts[count] : ' ';
    if (!deleteTxt) {
      letter = currentText.slice(0, ++index);
    } else {
      letter = currentText.slice(index.length, --index);
    }
    setTyping(letter);

    if (letter.length === currentText.length) {
      deleteTxt = true;
    }
    if (deleteTxt) {
      time /= 1.2;
    }
    if (letter.length === 0) {
      time = writing;
      deleteTxt = false;
      count++;
    }
    setTimeout(type, time);
  };

  return (
    <>
      <p className="typing">{typing}</p>
    </>
  );
};

Typewritter.defaultProps = {
  text: 'Coloca un texto'
};

export default Typewritter;