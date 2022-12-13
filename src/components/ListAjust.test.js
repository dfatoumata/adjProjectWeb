import { render, screen } from '@testing-library/react';

import ListAjust from './ListAjust';

test('renders learn react link', () => {
  render(<ListAjust fonction="listAjust" />);
  const linkElement = screen.getAllByRole(/listAjust/i);
  expect(linkElement).toBeInTheDocument();
});


