import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnalogClock = ({ hours, minutes, seconds }) => {
  const handHoursValue = (hours / 12) * 360;
  const handMinutesValue = (minutes / 60) * 360;
  const handSecondsValue = (seconds / 60) * 360;

  return (
    <Clock>
      <HandHours deg={handHoursValue} />
      <HandMinutes deg={handMinutesValue} />
      <HandSeconds deg={handSecondsValue} />
      <ClockLine deg="0" value={12} />
      <ClockLine deg="30deg" value={1} />
      <ClockLine deg="60deg" value={2} />
      <ClockLine deg="90deg" value={3} />
      <ClockLine deg="120deg" value={4} />
      <ClockLine deg="150deg" value={5} />
      <ClockLine deg="180deg" value={6} />
      <ClockLine deg="210deg" value={7} />
      <ClockLine deg="240deg" value={8} />
      <ClockLine deg="270deg" value={9} />
      <ClockLine deg="300deg" value={10} />
      <ClockLine deg="330deg" value={11} />
    </Clock>
  );
};

AnalogClock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

const Clock = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid #123;
  background-color: #fff;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8%;
    height: 8%;
    border-radius: 50%;
    background-color: #123;
  }

  @media screen and (min-width: 360px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 360px) and (orientation: landscape) {
    width: 130px;
    height: 130px;
    border: 5px solid #123;
  }

  @media screen and (min-width: 760px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const Hand = styled.span`
  position: absolute;
  transform-origin: center bottom;
  border-radius: 10px;
`;

const HandHours = styled(Hand)`
  top: 30%;
  left: 50%;
  transform: translateX(-50%) rotate(${({ deg }) => deg}deg);
  width: 3%;
  height: 20%;
  background-color: #234;
`;
const HandMinutes = styled(Hand)`
  top: 15%;
  left: 50%;
  transform: translateX(-50%) rotate(${({ deg }) => deg}deg);
  width: 2%;
  height: 35%;
  background-color: #456;
`;
const HandSeconds = styled(Hand)`
  top: 5%;
  left: 50%;
  transform: translateX(-50%) rotate(${({ deg }) => deg}deg);
  width: 1%;
  height: 45%;
  background-color: #678;
`;

const ClockLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(${({ deg }) => deg});

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 3px;
    transform: translateX(-50%);
    background-color: #000;

    @media screen and (min-width: 1024px) {
      width: 3px;
      height: 4px;
    }
  }

  ::before {
    content: '${({ value }) => value}';
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%) rotate(${({ deg }) => -deg});
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
export default AnalogClock;
