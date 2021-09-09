const priceSummaryFixtures = {
  // Default test data
  testDefaultData: {
    summary: [
      {
        id: '5f4d4a7e62fb0224951e7ec4',
        selected: 1,
        name: 'Chicken Sausage & Spinach Ravioli',
        price: 1798,
      },
      {
        id: '5f4d4aa9f4508b34e9680613',
        selected: 1,
        name: 'Gouda Vibes Burgers',
        price: 1798,
      },
      {
        id: '5f4d4acdab96be0cd6073022',
        selected: 1,
        name: 'Figgy Balsamic Pork',
        price: 1798,
      },
      {
        id: 'shipping',
        price: 1298,
        name: 'Shipping',
      },
    ],
    totalPrice: 6692,
  },

  // empty test data
  testEmptyData: {
    summary: [],
    totalPrice: 0,
  },

  // Multiple recipe with more than 1 quantity
  testMultiQuantityData: {
    summary: [
      {
        id: '5f4d4a7e62fb0224951e7ec4',
        selected: 1,
        name: 'Chicken Sausage & Spinach Ravioli',
        price: 1798,
      },
      {
        id: '5f4d4aa9f4508b34e9680613',
        selected: 2,
        name: 'Gouda Vibes Burgers',
        price: 3596,
      },
      {
        id: '5f4d4acdab96be0cd6073022',
        selected: 1,
        name: 'Figgy Balsamic Pork',
        price: 1798,
      },
      {
        id: '5f4d5deaeb5aaa261c76c56c',
        selected: 1,
        name: 'Duck a l’Orange',
        price: 2996,
      },
      {
        id: 'shipping',
        price: 1298,
        name: 'Shipping',
      },
    ],
    totalPrice: 11486,
  },
};

export default priceSummaryFixtures;
