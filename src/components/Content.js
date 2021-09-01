import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Clock from './Clock/Clock';
import Stopwatch from './Stopwatch';

import videoSmall from '../videos/bg-small.mp4';
import videoLarge from '../videos/bg-large.mp4';
// Video (author: James Cheney) from Pexel

const Content = ({ mode }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  let currentContent;

  if (mode === 'clock') {
    currentContent = <Clock />;
  } else if (mode === 'stopwatch') {
    currentContent = <Stopwatch />;
  }

  const setVideo = () => {
    if (window.innerWidth >= 1024 && window.innerWidth < 1600) {
      setCurrentVideo(videoSmall);
    } else if (window.innerWidth >= 1600) {
      setCurrentVideo(videoLarge);
    } else {
      setCurrentVideo(null);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setVideo);

    return () => {
      window.removeEventListener('resize', setVideo);
    };
  }, []);

  return (
    <ContentWrapper>
      {currentVideo ? (
        <Video src={currentVideo} autoPlay loop muted playsInline />
      ) : null}
      <Container>{currentContent}</Container>
    </ContentWrapper>
  );
};

Content.propTypes = {
  mode: PropTypes.string.isRequired,
};

const ContentWrapper = styled.main`
  position: relative;
  flex-grow: 1;
  background: radial-gradient(#1d42b5, #800080);
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`;

export default Content;
