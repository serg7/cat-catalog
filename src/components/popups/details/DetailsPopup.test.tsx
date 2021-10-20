import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPopup from './DetailsPopup';
import Cat from '../details/Cat';
import '@testing-library/jest-dom/extend-expect'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

test('should render Detail popup', () => {
  render(<DetailsPopup show={true} cat={{} as Cat} />);
  const popup = screen.getByTestId('details-popup');

  expect(popup).toMatchSnapshot();
  expect(popup).toBeInTheDocument();
});