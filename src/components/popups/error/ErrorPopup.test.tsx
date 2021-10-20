import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPopup from './ErrorPopup';

test('should render Detail popup', () => {
  render(<ErrorPopup isShown={true} message="test" />);
  const popup = screen.getByTestId('error-popup');

  expect(popup).toMatchSnapshot();
});