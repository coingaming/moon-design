/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Collapsed from '../Collapsed';

describe('Avatar', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(<Default />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders more then 4 items', () => {
    const testRenderer = renderer.create(<Collapsed />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
