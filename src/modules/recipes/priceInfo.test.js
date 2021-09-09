import { render, screen } from '@testing-library/react';

import PriceInfo from './PriceInfo';
import React from 'react';
import priceInfoFixtures from './priceInfo.fixtures';

describe('Price info', () => {
  it('should have aria label', () => {
    render(<PriceInfo {...priceInfoFixtures} />);
    const button = screen.getByRole('button', { name: 'hello fresh box summary' });
    expect(button).toBeVisible();
  });
});
