/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import OneItem from '../OneItem';
import TwoItems from '../TwoItems';
import FourItems from '../FourItems';
import Collapsed from '../Collapsed';

describe('Breadcrumb', () => {
  it('renders one item', () => {
    const testRenderer = renderer.create(<OneItem />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders two items', () => {
    const testRenderer = renderer.create(<TwoItems />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders four items', () => {
    const testRenderer = renderer.create(<FourItems />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders collapsed', () => {
    const testRenderer = renderer.create(<Collapsed />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
