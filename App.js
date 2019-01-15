import React from 'react';
import Boot from './src/boot';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Boot />
    </Provider>
  );
};
export default App;
