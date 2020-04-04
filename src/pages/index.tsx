import React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const IndexPage = (): JSX.Element => (
  <IndexLayout>
    <Page>
      <Container />
    </Page>
  </IndexLayout>
);

export default IndexPage;
