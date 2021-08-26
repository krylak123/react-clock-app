import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';

const Clock = () => {
  const [isAnalog, setIsAnalog] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let intervalIndex;

  const handleOnClick = () => {
    setIsAnalog((prevValue) => !prevValue);
  };

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
    <ClockWrapper>
      {isAnalog ? (
        <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
      ) : (
        <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
      )}
      <Btn type="button" onClick={handleOnClick}>
        toggle clock
      </Btn>
    </ClockWrapper>
  );
};

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  border-style: none;
  border-radius: 3px;
  background-color: #800080;
  box-shadow: 5px 5px 5px 0 #000;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    color: #fff;
    background-color: #500050;
    box-shadow: 0 0 5px 0 #000;
  }

  @media screen and (orientation: landscape) {
    margin: 0 5px;
    width: auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 7px 20px;
    font-size: 1.5rem;
  }
`;

export default Clock;
