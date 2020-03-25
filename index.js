/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/Reducers/reducer';

const store = createStore(reducer);

const goDutchApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => goDutchApp);
