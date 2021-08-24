import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Timer from './Timer';

const Content = ({ mode }) => {
  let currentContent;

  // if (mode === 'clock') {
  //   currentContent = <Timer />;
  // }

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
  margin: 0 auto;
  max-width: 1024px;
`;

export default Content;
