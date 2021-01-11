import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './../components/App';

test('renders the correct content', () => {
  // Render a react component to the DOM
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);

  // Use DOM APIs (querySelector) to make assertions
  expect(root.querySelector('h1').textContent).toBe(
    'React Typescript Todo List'
  );
});
