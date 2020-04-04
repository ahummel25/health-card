import React, { useState } from 'react';
import styled from '@emotion/styled';

import { widths } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

import ButtonForId from './ButtonForId';
import HealthCard from './HealthCard';

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

const Container: React.FC<ContainerProps> = ({ className }) => {
  const [memberId, setMemberId] = useState<number | null>(null);
  return (
    <StyledContainer className={className}>
      <HealthCard memberId={memberId} />
      <ButtonForId setMemberId={setMemberId} />
    </StyledContainer>
  );
};

export default Container;
