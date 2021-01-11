import * as React from 'react';
import { render } from '@testing-library/react';

import { App } from './../components/App';

test('renders the correct content', () => {
  // Render a react component to the DOM
  const { getByText, getByLabelText } = render(<App />);

  getByText('React Typescript Todo List');
  getByLabelText('What needs to be done?');
  getByText('Add Task');
});
