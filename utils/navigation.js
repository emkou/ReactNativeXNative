import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainView from '../src/MainView';
import ListView from '../src/ListView';

const RootNavigator = createStackNavigator(
  {
    Main: MainView,
    List: ListView
  },
  {
    initialRouteName: 'Main'
  }
);

export const Navigator = createAppContainer(RootNavigator);
