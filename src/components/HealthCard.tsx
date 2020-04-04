import React, { useState } from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles/variables';

interface HealthCardProps {
  flipped: boolean;
}

const HealthCardContainer = styled.div`
  position: absolute;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  width: 350px;
  height: 200px;
  margin: 0 auto;
`;

const HealthCardMain = styled.div`
  border-radius: 10px;
  line-height: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 315px;
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 400ms linear;
  transition: all 400ms linear;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled.div`
  background: ${colors.cardColor};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  -webkit-transition: all 400ms linear;
  transition: all 400ms linear;
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 0;
`;

const CardBack = CardFront;

const HealthCard = (): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <HealthCardContainer>
      <HealthCardMain onClick={(): void => setIsFlipped(!isFlipped)}>
        {isFlipped ? <CardBack /> : <CardFront />}
      </HealthCardMain>
    </HealthCardContainer>
  );
};

export default HealthCard;
