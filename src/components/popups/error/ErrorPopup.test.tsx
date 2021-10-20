import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorPopup from './ErrorPopup';

test('should render Error popup', () => {
  render(<ErrorPopup isShown={true} message="test" />);
  const popup = screen.getByTestId('error-popup');

  expect(popup).toMatchSnapshot();
  expect(popup).toBeInTheDocument();
});