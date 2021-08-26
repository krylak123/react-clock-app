import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DigitalClock = ({ hours, minutes, seconds }) => (
  <Time>
    {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:
    {seconds < 10 ? `0${seconds}` : seconds}
  </Time>
);

DigitalClock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
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

export default DigitalClock;
