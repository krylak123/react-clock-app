import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let intervalIndex;

  const getData = () => {
    const time = new Date();

    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  };

  useEffect(() => {
    intervalIndex = setInterval(getData, 100);

    return () => {
      clearInterval(intervalIndex);
    };
  }, []);

  return (
    <Time>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </Time>
  );
};

const Time = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-shadow: 5px 7px 10px #000;

  @media screen and (min-width: 360px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 760px) and (orientation: portrait) {
    font-size: 6rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 10rem;
  }
`;

export default Clock;
