import { render, screen } from '@testing-library/react';

import PriceSummary from './PriceSummary';
import React from 'react';
import { parseRawPrice } from './price';
import priceSummaryFixtures from './priceSummary.fixtures';

describe('Price summary', () => {
  test('should match all the items present in summary', () => {
    // explicitly stating this so that jest knows how many assertions will be there
    expect.assertions(priceSummaryFixtures.testMultiQuantityData.summary.length + 1);
    render(<PriceSummary {...priceSummaryFixtures.testMultiQuantityData} />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((item, index) => {
      const dataItem = priceSummaryFixtures.testMultiQuantityData.summary[index];
      let text;

      if (index === priceSummaryFixtures.testMultiQuantityData.summary.length) {
        // for testing total price containing list item
        text = `Total${parseRawPrice(priceSummaryFixtures.testMultiQuantityData.totalPrice)}`;
      } else {
        // for testing recipe summary item
        text = `${dataItem.name}${
          !!dataItem.selected && dataItem.selected > 1 ? ` x ${dataItem.selected}` : ``
        }${parseRawPrice(dataItem.price)}`;
      }

      expect(item).toHaveTextContent(text);
    });
  });

  test('should render empty box message', () => {
    render(<PriceSummary {...priceSummaryFixtures.testEmptyData} />);

    expect(screen.getByText('Your Box Is Currently Empty')).toBeVisible();
  });

  test('should match snapshot', () => {
    expect(
      render(<PriceSummary {...priceSummaryFixtures.testMultiQuantityData} />)
    ).toMatchSnapshot();
  });
});
