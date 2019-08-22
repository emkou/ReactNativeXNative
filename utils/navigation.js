import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainView from '../src/MainView';
import ListView from '../src/ListView';
import StateView from '../src/StateView';

const RootNavigator = createStackNavigator(
  {
    Main: MainView,
    List: ListView,
    State: StateView
  },
  {
    initialRouteName: 'Main'
  }
);

export const Navigator = createAppContainer(RootNavigator);
