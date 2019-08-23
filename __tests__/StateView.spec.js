/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Button } from 'react-native';
import StateView from '../src/StateView';
import renderer from 'react-test-renderer';

describe('<StateView />', () => {
  const render = () => {
    return renderer.create(<StateView />);
  };

  it('will have correct initial state', () => {
    const { root } = render();
    const instance = root.instance;
    expect(instance.state.count).toBe(0);
    expect(instance.state.count).not.toBe(1);
  });

  it('will redirect to List View', async () => {
    const { root } = render();
    const instance = root.instance;
    const buttons = root.findAllByType(Button);
    expect(buttons.length).toBe(1);
    const [incrementCountButton] = buttons;
    await incrementCountButton.props.onPress();
    expect(instance.state.count).toBe(1);
    expect(instance.state.count).not.toBe(0);
  });
});
