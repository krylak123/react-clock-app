import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Stopwatch = () => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStartPause = () => {
    if (!isActive) {
      setIsActive((prevValue) => !prevValue);
      setIndex(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 10)
      );
    } else {
      setIsActive((prevValue) => !prevValue);
      clearInterval(index);
    }
  };

  const handleReset = () => {
    clearInterval(index);
    setTime(0);
    setIsActive(false);
  };

  useEffect(() => () => clearInterval(index), [index]);

  return (
    <StopwarchWrapper>
      <Time>{(time / 100).toFixed(2)}s</Time>
      <div>
        <Btn type="submit" onClick={handleStartPause}>
          {isActive ? 'pause' : 'start'}
        </Btn>
        <Btn type="submit" onClick={handleReset}>
          reset
        </Btn>
      </div>
    </StopwarchWrapper>
  );
};

const StopwarchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Btn = styled.button`
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

  :first-child {
    margin-right: 10px;
  }

  :hover {
    color: #fff;
    background-color: #500050;
    box-shadow: 0 0 5px 0 #000;
  }

  @media screen and (min-width: 1024px) {
    padding: 7px 20px;
    font-size: 2rem;

    :first-child {
      margin-right: 20px;
    }
  }
`;

export default Stopwatch;
