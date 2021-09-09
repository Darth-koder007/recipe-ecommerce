import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import RecipeCard from './RecipeCard';
import recipeCardFixtures from './recipeCard.fixtures';

describe('Recipe card', () => {
  describe('default view', () => {
    test('should render recipe card with correct recipe name', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      expect(screen.getByText(recipeCardFixtures.testDefaultData.name)).toBeVisible();
    });

    test('should render recipe card with correct recipe image', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      expect(screen.getByAltText(recipeCardFixtures.testDefaultData.name)).toBeVisible();
    });

    test('should render recipe card with correct headline', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      expect(screen.getByText(recipeCardFixtures.testDefaultData.headline)).toBeVisible();
    });

    test('should render recipe card with Add button', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      const addButton = screen.getByRole('button', {
        name: `Add ${recipeCardFixtures.testDefaultData.name} to your hello fresh box`,
      });

      expect(addButton).toBeVisible();
    });

    test('should call handleAddRecipe function when clicked on Add button with correct recipe id', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      const addButton = screen.getByRole('button', {
        name: `Add ${recipeCardFixtures.testDefaultData.name} to your hello fresh box`,
      });

      fireEvent.click(addButton);

      expect(recipeCardFixtures.testDefaultData.handleAddRecipe).toHaveBeenCalledWith(
        recipeCardFixtures.testDefaultData.id
      );
    });

    test('should render recipe card with extra charge text', () => {
      render(<RecipeCard {...recipeCardFixtures.testDefaultData} />);

      expect(screen.getByLabelText('Extra charge')).toBeVisible();
    });

    test('should render recipe card with Add button disabled when maximum recipe limit is reached', () => {
      render(<RecipeCard {...recipeCardFixtures.testAddDisabledData} />);

      const addButton = screen.getByRole('button', {
        name: `Add ${recipeCardFixtures.testAddDisabledData.name} to your hello fresh box`,
      });

      expect(addButton).toBeDisabled();
    });

    test('should match snapshot correctly with Add button', () => {
      expect(render(<RecipeCard {...recipeCardFixtures.testDefaultData} />)).toMatchSnapshot();
    });
  });

  describe('add extra meal view', () => {
    test('should render recipe card with Add extra meal button when minimum recipe limit is met', () => {
      render(<RecipeCard {...recipeCardFixtures.testAddExtraData} />);

      const addButton = screen.getByRole('button', {
        text: `Add ${recipeCardFixtures.testAddExtraData.name} to your hello fresh box`,
      });

      expect(addButton).toHaveTextContent('Add extra meal');
    });

    test('should render recipe card with Add extra meal button disabled when maximum recipe limit is reached', () => {
      render(<RecipeCard {...recipeCardFixtures.testAddExtraDisabledData} />);

      const addButton = screen.getByRole('button', {
        text: `Add ${recipeCardFixtures.testAddExtraDisabledData.name} to your hello fresh box`,
      });

      expect(addButton).toBeDisabled();
    });

    test('should match snapshot correctly with Add extra meal button', () => {
      expect(render(<RecipeCard {...recipeCardFixtures.testAddExtraData} />)).toMatchSnapshot();
    });
  });

  describe('quantity button view', () => {
    test('should render recipe card with selected quantity text', () => {
      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />);

      expect(
        screen.getByText(`${recipeCardFixtures.testQuantityButtonData.selected} in your box`)
      ).toBeVisible();
    });

    test('should render recipe card with increase and decrease quantity button', () => {
      expect.assertions(2);

      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />);

      const increaseButton = screen.getByRole('button', {
        name: `Increase quantity of ${recipeCardFixtures.testQuantityButtonData.name}`,
      });

      expect(increaseButton).toBeVisible();

      const decreaseButton = screen.getByRole('button', {
        name: `Decrease quantity of ${recipeCardFixtures.testQuantityButtonData.name}`,
      });

      expect(decreaseButton).toBeVisible();
    });

    test('should render recipe card with increase quantity button disabled when maximum recipe limit is reached', () => {
      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonDisabledData} />);

      const increaseButton = screen.getByRole('button', {
        name: `Increase quantity of ${recipeCardFixtures.testQuantityButtonDisabledData.name}`,
      });

      expect(increaseButton).toBeDisabled();
    });

    test('should call handleAddRecipe function with correct recipe id when clicked on increase quantity button', () => {
      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />);

      const increaseButton = screen.getByRole('button', {
        name: `Increase quantity of ${recipeCardFixtures.testQuantityButtonData.name}`,
      });

      fireEvent.click(increaseButton);

      expect(recipeCardFixtures.testQuantityButtonData.handleAddRecipe).toHaveBeenCalledWith(
        recipeCardFixtures.testQuantityButtonData.id
      );
    });

    test('should call handleRemoveRecipe function with correct recipe id when clicked on descrease quantity button', () => {
      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />);

      const decreaseButton = screen.getByRole('button', {
        name: `Decrease quantity of ${recipeCardFixtures.testQuantityButtonData.name}`,
      });

      fireEvent.click(decreaseButton);

      expect(recipeCardFixtures.testQuantityButtonData.handleRemoveRecipe).toHaveBeenCalledWith(
        recipeCardFixtures.testQuantityButtonData.id
      );
    });

    test('should render recipe card with servings size text', () => {
      render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />);

      expect(
        screen.getByText(
          `(${
            recipeCardFixtures.testQuantityButtonData.selected *
            recipeCardFixtures.testQuantityButtonData.yields
          } servings)`
        )
      ).toBeVisible();
    });

    test('should match snapshot correctly with increase and decrease quantity button', () => {
      expect(
        render(<RecipeCard {...recipeCardFixtures.testQuantityButtonData} />)
      ).toMatchSnapshot();
    });
  });
});
