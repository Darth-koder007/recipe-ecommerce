import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';
import React from 'react';
import RecipesList from './RecipesList';
import { configureStore } from '@reduxjs/toolkit';
import { expect } from '@jest/globals';
import store from '../../store';

describe('Recipe List', () => {
  test('should render all recipes with correct recipe name and headline', async () => {
    const _store = configureStore(store);
    render(
      <Provider store={_store}>
        <RecipesList />
      </Provider>
    );

    // INFO:Since we donot have control over data fetching here we are waiting
    // for the store to be populated
    await waitFor(() => expect(_store.getState().recipes[0]).toBeDefined());

    for (const recipe of _store.getState().recipes) {
      expect(screen.getByText(recipe.name)).toBeVisible();
      expect(screen.getByText(recipe.headline)).toBeVisible();
    }
  });

  test('should show summary on clicking sumamry button', async () => {
    const _store = configureStore(store);
    render(
      <Provider store={_store}>
        <RecipesList />
      </Provider>
    );

    await waitFor(() => screen.getByRole('button', { name: 'hello fresh box summary' }));

    const summaryButton = screen.getByRole('button', { name: 'hello fresh box summary' });
    fireEvent.click(summaryButton);

    expect(screen.getByTestId('price-summary')).toBeVisible();
  });

  test('should add recipe to summary on clicking add button', async () => {
    const _store = configureStore(store);
    render(
      <Provider store={_store}>
        <RecipesList />
      </Provider>
    );

    await waitFor(() => screen.getByRole('button', { name: 'hello fresh box summary' }));

    const recipeName = _store.getState().recipes[15].name;

    const addButtonText = `Add ${recipeName} to your hello fresh box`;
    const addButton = screen.getByRole('button', { name: addButtonText });
    fireEvent.click(addButton);

    const summaryButton = screen.getByRole('button', { name: 'hello fresh box summary' });
    fireEvent.click(summaryButton);

    expect(screen.getByTestId('price-summary')).toHaveTextContent(recipeName);
  });

  test('should increase quaintity of recipe on clicking plus button', async () => {
    const _store = configureStore(store);
    render(
      <Provider store={_store}>
        <RecipesList />
      </Provider>
    );

    await waitFor(() => screen.getByRole('button', { name: 'hello fresh box summary' }));

    const recipeName = _store.getState().recipes[15].name;

    const addButtonText = `Add ${recipeName} to your hello fresh box`;
    const addButton = screen.getByRole('button', { name: addButtonText });
    fireEvent.click(addButton);
    const currentQuantity = _store.getState().recipes[15].selected;

    const increaseQuantityButtonText = `Increase quantity of ${recipeName}`;
    const increaseQuantityButton = screen.getByRole('button', { name: increaseQuantityButtonText });
    fireEvent.click(increaseQuantityButton);

    expect(_store.getState().recipes[15].selected - currentQuantity).toBe(1);
  });

  test('should decrease quaintity of recipe on clicking minus button', async () => {
    const _store = configureStore(store);
    render(
      <Provider store={_store}>
        <RecipesList />
      </Provider>
    );

    await waitFor(() => screen.getByRole('button', { name: 'hello fresh box summary' }));

    const recipeName = _store.getState().recipes[15].name;

    const addButtonText = `Add ${recipeName} to your hello fresh box`;
    const addButton = screen.getByRole('button', { name: addButtonText });
    fireEvent.click(addButton);

    const increaseQuantityButtonText = `Increase quantity of ${recipeName}`;
    const increaseQuantityButton = screen.getByRole('button', {
      name: increaseQuantityButtonText,
    });
    fireEvent.click(increaseQuantityButton);
    fireEvent.click(increaseQuantityButton);
    fireEvent.click(increaseQuantityButton);

    const currentQuantity = _store.getState().recipes[15].selected;

    const decreaseQuantityButtonText = `Decrease quantity of ${recipeName}`;
    const decreaseQuantityButton = screen.getByRole('button', {
      name: decreaseQuantityButtonText,
    });
    fireEvent.click(decreaseQuantityButton);

    expect(currentQuantity - _store.getState().recipes[15].selected).toBe(1);
  });
});
