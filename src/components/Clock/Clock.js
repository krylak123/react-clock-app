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
    <>
      <Btn type="button" onClick={handleOnClick}>
        {isAnalog ? (
          <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
        ) : (
          <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
        )}
      </Btn>
    </>
  );
};

const Btn = styled.button`
  outline: none;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

export default Clock;
