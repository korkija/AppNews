import React from 'react';
import {AppNavigation} from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export const appNewsStore = store;

const App: () => React$Node = () => {
  return (
    <Provider store={appNewsStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
