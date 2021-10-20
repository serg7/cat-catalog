import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('should render grid', () => {
  render(<Grid />);
  const grid = screen.getByTestId('grid');

  expect(grid).toMatchSnapshot();
});
