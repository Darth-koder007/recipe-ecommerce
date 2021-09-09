const recipeCardFixtures = {
  // Default test data
  testDefaultData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: false,
    minRecipesSelected: false,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 0,
    selectionLimit: null,
    yields: 2,
  },

  // test data for Add button disabled when maximum recipe limit is reached
  testAddDisabledData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: true,
    minRecipesSelected: true,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 0,
    selectionLimit: null,
    yields: 2,
  },

  // test data for Add extra meal button when minimum recipe limit is met
  testAddExtraData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: false,
    minRecipesSelected: true,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 0,
    selectionLimit: null,
    yields: 2,
  },

  // test data for Add extra meal button disabled when maximum recipe limit is reached
  testAddExtraDisabledData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: true,
    minRecipesSelected: true,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 0,
    selectionLimit: null,
    yields: 2,
  },

  // test data for increase quantity button
  testQuantityButtonData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: false,
    minRecipesSelected: true,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 3,
    selectionLimit: null,
    yields: 2,
  },

  // test data for increase quantity button disabled when maximum recipe limit is reached
  testQuantityButtonDisabledData: {
    extraCharge: 1198,
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
    headline: 'with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes',
    id: '5f4d5f4ee85668628873add8',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg',
    maxRecipesSelected: true,
    minRecipesSelected: true,
    name: 'Steak & Shrimp in a Creamy Thyme Sauce',
    selected: 3,
    selectionLimit: null,
    yields: 2,
  },
};

export default recipeCardFixtures;
