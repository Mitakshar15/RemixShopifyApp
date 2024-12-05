import { Card, Layout, Page } from '@shopify/polaris';
import React from 'react';

const sample = () => {
  return (

    <Page>
    <Layout>
      <Layout.Section>
        <Card>
        <h1>Sample Page</h1>
        </Card>

      </Layout.Section>
      <Layout.Section>
        <Card>
          <h2>Additional Content</h2>
          <p>This content is added to the sample page.</p>
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card>
          <h2>Sample Sub-section</h2>
          <p>This is a sub-section of the sample page.</p>
        </Card>
      </Layout.Section>
      
    </Layout>

    </Page>

  );
}

export default sample;
