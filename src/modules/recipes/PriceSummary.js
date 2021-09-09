import List, { ListItem } from '../../components/List';

import Flex from '../../components/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../components/Text';
import { parseRawPrice } from './price';

const PriceSummaryItem = ({ name, price, selected }) => (
  <ListItem>
    <Flex paddingBottom="xs" justifyContent="space-between">
      <Text as="span">
        {name}
        {!!selected && selected > 1 && ` x ${selected}`}
      </Text>
      <Text as="span">{parseRawPrice(price)}</Text>
    </Flex>
  </ListItem>
);

PriceSummaryItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  selected: PropTypes.number,
};

// PriceSummary user interface
const EmptyPriceSummary = () => (
  <Text fontWeight="bold" as="p" textAlign="center">
    Your Box Is Currently Empty
  </Text>
);

// PriceSummary user interface
const PriceSummary = ({ summary, totalPrice }) => (
  <List width={['290px', '450px']} padding="sm" data-testid="price-summary">
    {summary.map(({ id, ...restSummary }) => (
      <PriceSummaryItem key={id} {...restSummary} />
    ))}
    {summary.length > 0 ? (
      <ListItem>
        <Flex
          borderTopWidth="sm"
          borderTopColor="border"
          borderTopStyle="solid"
          justifyContent="space-between"
          alignItems="center"
          paddingTop="xs">
          <Text fontWeight="bold" as="span">
            Total
          </Text>
          <Text fontWeight="bold" as="span">
            {parseRawPrice(totalPrice)}
          </Text>
        </Flex>
      </ListItem>
    ) : (
      <EmptyPriceSummary />
    )}
  </List>
);

PriceSummary.propTypes = {
  totalPrice: PropTypes.number,
  summary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      selected: PropTypes.number,
    })
  ),
};

export default PriceSummary;
