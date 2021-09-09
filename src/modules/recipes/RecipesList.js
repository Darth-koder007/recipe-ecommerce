import { Col, Row } from '../../components/Grid';
import {
  addSelectedRecipe,
  recipesSelector,
  removeSelectedRecipe,
  setRecipeData,
} from '../../reducers/recipesSlice';
import { boxCapacitySelector, boxSummarySelector } from './recipesSelectors';
import { useDispatch, useSelector } from 'react-redux';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import PriceInfo from './PriceInfo';
import React from 'react';
import RecipeCard from './RecipeCard';
import { parseRawPrice } from './price';
import { setBoxConfig } from '../../reducers/boxConfigSlice';
import useFetchHelloFreshBox from '../../hooks/useFetchHelloFreshBox';

const Recipes = () => {
  // Fetch data hook
  const { data, loading } = useFetchHelloFreshBox();

  // Recipe selector
  const recipes = useSelector(recipesSelector);

  const dispatch = useDispatch();

  // Add / Remove recipe dispatch
  const handleAddRecipe = (id) => {
    dispatch(addSelectedRecipe({ id }));
  };
  const handleRemoveRecipe = (id) => {
    dispatch(removeSelectedRecipe({ id }));
  };

  // box max/min limit boolean flags selector
  const { maxRecipesSelected, minRecipesSelected } = useSelector(boxCapacitySelector);

  // price summary and total price selector
  const { summary, totalPrice } = useSelector(boxSummarySelector);

  React.useEffect(() => {
    const { recipes: fetchedRecipes, ...restData } = data;

    if (fetchedRecipes) {
      dispatch(setRecipeData(fetchedRecipes));
      dispatch(
        setBoxConfig({
          id: restData.id,
          productName: restData.productName,
          headline: restData.headline,
          min: restData.min,
          max: restData.max,
          baseRecipePrice: restData.baseRecipePrice,
          shippingPrice: restData.shippingPrice,
        })
      );
    }
  }, [data, dispatch]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{data.headline}</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3>{parseRawPrice(totalPrice)}</h3>
            </Box>
            <PriceInfo summary={summary} totalPrice={totalPrice} />
          </Flex>
        </Col>
      </Row>

      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={minRecipesSelected}
                maxRecipesSelected={maxRecipesSelected}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
