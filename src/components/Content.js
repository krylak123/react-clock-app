import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Clock from './Clock';
import Stopwatch from './Stopwatch';

const Content = ({ mode }) => {
  let currentContent;

  if (mode === 'clock') {
    currentContent = <Clock />;
  } else if (mode === 'stopwatch') {
    currentContent = <Stopwatch />;
  }

  return (
    <ContentWrapper>
      <Container>{currentContent}</Container>
    </ContentWrapper>
  );
};

Content.propTypes = {
  mode: PropTypes.string.isRequired,
};

const ContentWrapper = styled.main`
  flex-grow: 1;
  background: radial-gradient(#1d42b5, #800080);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
`;

export default Content;
