import React from 'react';
import styled from '@emotion/styled';

import { widths } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  height: 500px;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`;

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
