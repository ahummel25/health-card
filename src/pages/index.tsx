import React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import HealthCard from '../components/HealthCard';
import IndexLayout from '../layouts';

const IndexPage = (): JSX.Element => (
  <IndexLayout>
    <Page>
      <Container>
        <HealthCard />
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
