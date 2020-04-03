import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container></Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
