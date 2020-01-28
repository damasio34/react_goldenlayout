import React from 'react';

import Foo from './Foo';
import Bar from './Bar';

import logo from './logo.svg';
import './App.css';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';
import GoldenLayout, { Row, Stack, createGoldenLayoutComponent } from 'react-golden-layout';

function App() {
  return (
    <GoldenLayout>
      <Row>
        <Stack>
          {
            // To apply properties to a React component, use createGoldenLayoutComponent
          }
          {createGoldenLayoutComponent(Foo, { isClosable: false, title: "Foo's Title" })}
        </Stack>
        <Stack>
          {
            // If you don't want any special settings you can just pass
            // React components directly.
          }
          {Bar}
        </Stack>
      </Row>
    </GoldenLayout>
  );
}

export default App;
