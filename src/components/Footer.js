import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = ({ mode, modeChanger }) => {
  const handleOnClick = (e) => {
    modeChanger(e.target.name);
  };

  return (
    <FooterWrapper>
      <Container>
        <BtnsWrapper>
          <Btn type="button" name="clock" onClick={handleOnClick}>
            clock
          </Btn>
          <Btn type="button" name="stopwatch" onClick={handleOnClick}>
            stopwatch
          </Btn>
          <Btn type="button" name="timer" onClick={handleOnClick}>
            timer
          </Btn>
        </BtnsWrapper>
        <ModeWrapper>
          <CurrentModeTitle>
            current mode:
            <CurrentMode>{mode}</CurrentMode>
          </CurrentModeTitle>
        </ModeWrapper>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  mode: PropTypes.string.isRequired,
  modeChanger: PropTypes.func.isRequired,
};

const FooterWrapper = styled.footer`
  padding: 15px 0;
  background-color: #051545;

  @media screen and (min-width: 1024px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1024px;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

const Btn = styled.button`
  margin-bottom: 10px;
  padding: 5px 0;
  width: 95%;
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
    padding: 5px 10px;
    width: auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 7px 20px;
    font-size: 1.5rem;
  }
`;

const ModeWrapper = styled.div`
  color: #fff;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const CurrentModeTitle = styled.p``;

const CurrentMode = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

export default Footer;
