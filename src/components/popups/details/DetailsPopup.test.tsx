import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPopup from './DetailsPopup';
import Cat from '../details/Cat';

test('should render Detail popup', () => {
  render(<DetailsPopup show={true} cat={{} as Cat} />);
  const popup = screen.getByTestId('details-popup');

  expect(popup).toMatchSnapshot();
});