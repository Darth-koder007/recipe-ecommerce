import Body from './layout/Body';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import React from 'react';
import Recipes from './pages/Recipes';
import { Router } from '@reach/router';
import ThemeProvider from './components/ThemeProvider';
import { configureStore } from '@reduxjs/toolkit';
import store from './store';

const App = () => (
  <Provider store={configureStore(store)}>
    <ThemeProvider>
      <Header />
      <Body>
        <Router>
          <Recipes path="/" />
        </Router>
      </Body>
      <Footer />
    </ThemeProvider>
  </Provider>
);

export default App;
