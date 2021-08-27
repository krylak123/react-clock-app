import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <Clock>
      <ClockDot />
      <ClockLine deg="0" />
      <ClockLine deg="30deg" />
      <ClockLine deg="60deg" />
      <ClockLine deg="90deg" />
      <ClockLine deg="120deg" />
      <ClockLine deg="150deg" />
      <ClockLine deg="180deg" />
      <ClockLine deg="210deg" />
      <ClockLine deg="240deg" />
      <ClockLine deg="270deg" />
      <ClockLine deg="300deg" />
      <ClockLine deg="330deg" />
    </Clock>
    <Title>Clock App</Title>
  </HeaderWrapper>
);

const ClockAnimation = keyframes`
  from {
    transform: translate(-50%, -100%) rotate(0);
  }

  to {
    transform: translate(-50%, -100%) rotate(360deg);
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #051545;

  @media screen and (min-width: 1024px) {
    padding: 20px 0;
  }
`;

const Clock = styled.div`
  position: relative;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  background: radial-gradient(#fff, #999);
  border: 5px solid #123;
  border-radius: 50%;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 45%;
    transform-origin: center bottom;
    transform: translate(-50%, -100%) rotate(0);
    background-color: #345;
    border-radius: 60% 40% 40% 60%;
    animation: ${ClockAnimation} 3600s infinite steps(60);
    z-index: 5;
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 49%;
    transform-origin: center bottom;
    transform: translate(-50%, -100%) rotate(0);
    background-color: #234;
    border-radius: 60% 40% 40% 60%;
    animation: ${ClockAnimation} 60s infinite steps(60);
    z-index: 5;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 20px;
    width: 70px;
    height: 70px;
  }
`;

const ClockDot = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10%;
  height: 10%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #000;
  z-index: 10;
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
`;

const Title = styled.h1`
  color: #fff;

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export default Header;
