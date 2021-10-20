import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('should render grid', () => {
  render(<Grid />);
  const grid = screen.getByTestId('grid');

  expect(grid).toMatchSnapshot();
  expect(grid).toBeInTheDocument();
});
