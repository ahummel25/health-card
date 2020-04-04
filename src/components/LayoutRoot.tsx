import React from 'react';
import { Global, css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';

import normalize from '../styles/normalize';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={(): SerializedStyles => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
