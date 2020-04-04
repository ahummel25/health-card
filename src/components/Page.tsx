import React from 'react';
import styled from '@emotion/styled';

import { dimensions } from '../styles/variables';

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
  height: 100%;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
