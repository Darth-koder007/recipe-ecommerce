import Tooltip, { TooltipContainer } from '../../components/Tooltip';

import IconButton from '../../components/IconButton';
import IconInfoCircle from '../../icons/IconInfoCircle';
import PriceSummary from './PriceSummary';
import PropTypes from 'prop-types';
import React from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const PriceInfo = ({ summary, totalPrice }) => {
  const ref = React.useRef();
  const [isTooltipOpen, setTooltipOpen] = React.useState(false);
  // Close on click outside of the tooltip
  useOnClickOutside(ref, () => setTooltipOpen(false));

  return (
    <TooltipContainer ref={ref}>
      <IconButton
        onClick={() => setTooltipOpen(!isTooltipOpen)}
        aria-label="hello fresh box summary">
        <IconInfoCircle size="20" />
      </IconButton>
      {isTooltipOpen ? (
        <Tooltip>
          <PriceSummary summary={summary} totalPrice={totalPrice} />
        </Tooltip>
      ) : null}
    </TooltipContainer>
  );
};

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

export default PriceInfo;
