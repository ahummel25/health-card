import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { useGetImages } from '../hooks';
import { IHealthCard, IRotateDirection } from '../interfaces';
import { fonts } from '../styles/variables';

import RxInfo from './Rx';

const HealthCardContainer = styled.div<IRotateDirection>`
  color: white;
  position: absolute;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  width: 350px;
  height: 200px;
  margin: 0 auto;
  background: inherit;

  @keyframes clockwiseSpin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes antiClockwiseSpin {
    from {
      transform: rotateY(360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  .is-flipping {
    animation: ${(props): string => props.direction} 0.5s ease-in-out;
  }

  .box-shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const HealthCardMain = styled.div`
  background: inherit;
  border-radius: 10px;
  line-height: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 315px;
  transform-style: preserve-3d;
  transition: all 400ms linear;
`;

const CardFront = styled.div`
  background: linear-gradient(to right, rgb(98, 144, 228), rgb(32, 83, 177));
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: all 400ms linear;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 0;

  .member-number {
    &:before {
      content: attr(data-before);
      position: absolute;
      white-space: nowrap;
      bottom: 20px;
      left: 20px;
    }

    position: absolute;
    letter-spacing: 0em;
    bottom: 20px;
    padding-left: 20px;
    font-family: ${fonts.bitstream};
    font-size: 13px;
    opacity: 0.5 !important;

    .number {
      font-size: 14px;
    }
  }
`;

const CardBack = styled(({ ...rest }) => <CardFront {...rest} />)`
  .swipe-bar {
    background-image: linear-gradient(rgb(68, 68, 68), rgb(51, 51, 51));
    width: 100%;
    height: 20%;
    position: absolute;
    top: 15%;
  }
`;

const AsclepiusImg = styled(({ ...rest }) => <Img {...rest} />)`
  position: absolute;
  top: 10%;
  left: 30%;
`;

const HealthCard: FC<IHealthCard> = ({ memberId }): JSX.Element => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const { asclepiusImg } = useGetImages();

  return (
    <HealthCardContainer
      direction={showBack ? 'clockwiseSpin' : 'antiClockwiseSpin'}
    >
      <HealthCardMain
        className={isFlipping ? 'is-flipping' : 'box-shadow'}
        onClick={(): void => {
          setIsFlipping(true);
          setShowBack(!showBack);
        }}
        onAnimationEnd={(): void => {
          setIsFlipping(false);
        }}
      >
        {isFlipping ? (
          <CardFront />
        ) : showBack ? (
          <CardBack>
            <div className="swipe-bar"></div>
          </CardBack>
        ) : (
          <CardFront>
            <RxInfo />
            <AsclepiusImg
              style={{ maxHeight: '40%' }}
              imgStyle={{ objectFit: 'contain' }}
              fluid={asclepiusImg.childImageSharp.fluid}
              alt="Asclepius Logo"
            />
            <div className="member-number" data-before="Member ID">
              <span className="number">{memberId}</span>
            </div>
          </CardFront>
        )}
      </HealthCardMain>
    </HealthCardContainer>
  );
};

export default HealthCard;
