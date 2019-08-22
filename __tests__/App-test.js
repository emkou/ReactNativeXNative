/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//describe('<OnboardingScreen />', () => {
// let store;
//   let navigation;
//   let user;
//   let push;

//   const render = () => {
//     const defaultProps = { navigation };
//     return renderer.create(
//       <Provider store={store}>
//         <OnboardingScreen {...defaultProps} />
//       </Provider>
//     );
//   };

//   beforeEach(() => {
//     navigation = { navigate: jest.fn() };
//     user = { hasDirectDebitMandate: false };
//     push = { isGranted: false };
//     store = createStore({
//       ...testStore,
//       user,
//       push,
//     });
//     jest.spyOn(store, 'dispatch');
//     jest.spyOn(onboardingUtils, 'didPresentOnboarding').mockResolvedValue();
//     jest.spyOn(tracking, 'trackEvent');
//     jest.spyOn(i18n, 'getSelectedCountry').mockReturnValue('SE');
//   });

it('renders correctly', () => {
  renderer.create(<App />);
});
