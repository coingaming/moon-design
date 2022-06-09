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

describe('Avatar', () => {
  it('renders different Variants', () => {
    const testRenderer = renderer.create(<Variants />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Colours', () => {
    const testRenderer = renderer.create(<Colours />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(<Sizes />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different statuses', () => {
    const testRenderer = renderer.create(<Active />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different status origins', () => {
    const testRenderer = renderer.create(<StatusOrigin />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
