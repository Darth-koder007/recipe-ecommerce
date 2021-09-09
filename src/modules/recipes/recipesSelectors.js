import { boxConfigSelector } from '../../reducers/boxConfigSlice';
import { createSelector } from '@reduxjs/toolkit';
import { recipesSelector } from '../../reducers/recipesSlice';

// memoized selector return boolean according to box capacity
export const boxCapacitySelector = createSelector(
  recipesSelector,
  boxConfigSelector,
  (recipes, boxConfig) => {
    let totalSelectedItems = 0;
    recipes.forEach((recipe) => {
      totalSelectedItems += recipe.selected;
    });

    return {
      minRecipesSelected: totalSelectedItems >= boxConfig.min,
      maxRecipesSelected: totalSelectedItems === boxConfig.max,
    };
  }
);

// memoized selector return box summary (contents of box and total price of box)
export const boxSummarySelector = createSelector(
  recipesSelector,
  boxConfigSelector,
  (recipes, boxConfig) => {
    const boxSummary = {
      summary: [],
      totalPrice: 0,
    };

    recipes.forEach(({ id, selected, extraCharge, name }) => {
      if (!!selected) {
        const price = (boxConfig.baseRecipePrice + extraCharge) * selected;
        boxSummary.summary.push({
          id,
          selected,
          name,
          price: price,
        });
        boxSummary.totalPrice = boxSummary.totalPrice + price;
      }
    });

    if (boxSummary.summary.length > 0) {
      boxSummary.summary.push({
        id: 'shipping',
        price: boxConfig.shippingPrice,
        name: 'Shipping',
      });
      boxSummary.totalPrice = boxSummary.totalPrice + boxConfig.shippingPrice;
    }

    return boxSummary;
  }
);
