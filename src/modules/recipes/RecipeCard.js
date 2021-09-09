import Box from '../../components/Box';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import IconMinusCircle from '../../icons/IconMinusCircle';
import IconPlusCircle from '../../icons/IconPlusCircle';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../components/Text';
import css from '@styled-system/css';
import { parseRawPrice } from './price';
import styled from 'styled-components';

const RecipeCard = ({
  extraCharge,
  handleAddRecipe,
  handleRemoveRecipe,
  headline,
  id,
  image,
  maxRecipesSelected,
  minRecipesSelected,
  name,
  selected,
  selectionLimit,
  yields,
}) => (
  <Box
    borderWidth={selected ? 'md' : null}
    borderStyle={selected ? 'solid' : null}
    borderColor={selected ? 'primary_600' : null}
    m={selected ? '-2px' : null}
    borderRadius="md"
    boxShadow="lg">
    <Box borderRadius="2px 2px 0px 0px" paddingBottom="56.25%" overflow="hidden" height="0">
      <img src={image} alt={name} width="100%" />
    </Box>

    <Box p="xs" height="120px">
      <Text fontWeight="bold" fontFamily="primary" fontSize="md">
        {name}
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        {headline}
      </Text>
    </Box>
    {selected ? (
      <SelectedRecipeFooter
        recipeId={id}
        yields={yields}
        selected={selected}
        selectionLimit={selectionLimit}
        maxRecipesSelected={maxRecipesSelected}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        name={name}
      />
    ) : (
      <UnselectedRecipeFooter
        recipeId={id}
        price={extraCharge && extraCharge}
        selected={selected}
        minRecipesSelected={minRecipesSelected}
        maxRecipesSelected={maxRecipesSelected}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        name={name}
      />
    )}
  </Box>
);

RecipeCard.propTypes = {
  extraCharge: PropTypes.number,
  handleAddRecipe: PropTypes.func,
  handleRemoveRecipe: PropTypes.func,
  headline: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  maxRecipesSelected: PropTypes.bool,
  minRecipesSelected: PropTypes.bool,
  name: PropTypes.string,
  selected: PropTypes.number,
  selectionLimit: PropTypes.number,
  yields: PropTypes.number,
};

const UnselectedRecipeFooter = ({
  price,
  recipeId,
  minRecipesSelected,
  maxRecipesSelected,
  handleAddRecipe,
  name,
}) => (
  <Flex p="xs">
    <Box flex="50%" alignSelf="center">
      {price ? (
        <Text color="primary_600" aria-label={`Extra charge`}>
          +{parseRawPrice(price)}
        </Text>
      ) : null}
    </Box>
    <Box flex="50%">
      <Button
        onClick={() => handleAddRecipe(recipeId)}
        variant="secondary"
        width="100%"
        p="0"
        disabled={maxRecipesSelected}
        aria-label={`Add ${name} to your hello fresh box`}>
        {minRecipesSelected ? 'Add extra meal' : 'Add'}
      </Button>
    </Box>
  </Flex>
);

UnselectedRecipeFooter.propTypes = {
  price: PropTypes.number,
  recipeId: PropTypes.string,
  minRecipesSelected: PropTypes.bool,
  maxRecipesSelected: PropTypes.bool,
  handleAddRecipe: PropTypes.func,
  name: PropTypes.string,
};

const SelectedRecipeFooter = ({
  recipeId,
  selected,
  selectionLimit,
  yields,
  maxRecipesSelected,
  handleAddRecipe,
  handleRemoveRecipe,
  name,
}) => (
  <Flex backgroundColor="primary_600" justifyContent="space-between" alignItems="center">
    <SelectionButton
      onClick={() => handleRemoveRecipe(recipeId)}
      title={`Decrease quantity of ${name}`}
      aria-label={`Decrease quantity of ${name}`}>
      <IconMinusCircle />
    </SelectionButton>
    <Box color="white">
      <Text textAlign="center" fontWeight="bold" fontFamily="secondary" fontSize="md">
        {selected} in your box
      </Text>
      <Text textAlign="center" fontFamily="secondary" fontSize="sm">
        ({selected * yields} servings)
      </Text>
    </Box>
    <SelectionButton
      onClick={() => handleAddRecipe(recipeId)}
      title={`Increase quantity of ${name}`}
      aria-label={`Increase quantity of ${name}`}
      disabled={selected === selectionLimit || maxRecipesSelected}>
      <IconPlusCircle />
    </SelectionButton>
  </Flex>
);

SelectedRecipeFooter.propTypes = {
  recipeId: PropTypes.string,
  selected: PropTypes.number,
  selectionLimit: PropTypes.number,
  yields: PropTypes.number,
  maxRecipesSelected: PropTypes.bool,
  handleAddRecipe: PropTypes.func,
  handleRemoveRecipe: PropTypes.func,
  name: PropTypes.string,
};

const SelectionButton = styled.button`
  ${css({
    outline: 'none',
    color: 'white',
    padding: 'sm',
    cursor: 'pointer',
    backgroundColor: 'primary_600',
    border: 'none',
    ':hover:enabled': {
      backgroundColor: 'primary_700',
    },
    ':active:enabled': {
      backgroundColor: 'primary_800',
    },
    ':focus:enabled': {
      backgroundColor: 'primary_700',
    },
  })}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default RecipeCard;