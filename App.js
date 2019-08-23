import React from 'react';
import { Provider } from 'react-redux';
import createStore from './utils/redux/createStore';
import { Navigator } from './utils/navigation';
export const store = createStore();
const AppNavigator = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default AppNavigator;
