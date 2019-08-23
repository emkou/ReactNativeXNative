/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Button } from 'react-native';
import MainView from '../src/MainView';
import renderer from 'react-test-renderer';

describe('<MainView />', () => {
  let navigation;

  const render = () => {
    const defaultProps = { navigation };
    return renderer.create(<MainView {...defaultProps} />);
  };

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    //spy on is another way to manage direct "hijack" mocking of function in objects.
    // jest.spyOn(class, 'function').mockReturnValue(''); // .mockResolvedValue();
  });

  afterEach(() => jest.clearAllMocks());

  it('will redirect to State View', async () => {
    const { root } = render();
    const buttons = root.findAllByType(Button);

    expect(buttons.length).toBe(2);
    const [goToStateComponent] = buttons;

    await goToStateComponent.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('State');
  });

  it('will redirect to List View', async () => {
    const { root } = render();
    const buttons = root.findAllByType(Button);

    expect(buttons.length).toBe(2);
    const [_, listButton] = buttons;

    await listButton.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('List');
  });
});
