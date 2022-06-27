/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Colours from '../Colours';
import StatusOrigin from '../StatusOrigin';
import Active from '../Active';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Default from '../Default';
import Rounded from '../Rounded';

describe('Avatar', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(<Default />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders variants', () => {
    const testRenderer = renderer.create(<Variants />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders rounded', () => {
    const testRenderer = renderer.create(<Rounded />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders colours', () => {
    const testRenderer = renderer.create(<Colours />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(<Sizes />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports active', () => {
    const testRenderer = renderer.create(<Active />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports status origins', () => {
    const testRenderer = renderer.create(<StatusOrigin />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
