import React, { FC } from 'react';
import styled from '@emotion/styled';

import { colors, fonts } from '../styles/variables';

const RxInfoContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 10px;
  height: 40%;
  width: 40%;
  padding: 0;
  border: 3px solid ${colors.white};
  opacity: 0.5;
  font-size: 13px;
  font-family: ${fonts.bitstream};

  ul {
    float: left;
    padding-left: 8px;
  }

  li {
    list-style-type: none;

    &:after {
      clear: both;
    }
  }
`;

const RxInfo: FC<{}> = (): JSX.Element => {
  return (
    <RxInfoContainer>
      <ul>
        <li>RxBin: 610652</li>
        <br />
        <li>RxPCN: 82260000</li>
      </ul>
    </RxInfoContainer>
  );
};

export default RxInfo;
