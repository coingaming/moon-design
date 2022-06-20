/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import NoLabel from '../NoLabel';
import Disabled from '../Disabled';
import Checked from '../Checked';
import ReadOnly from '../ReadOnly';

describe('RadioButton', () => {
  it('default', () => {
    const testRenderer = renderer.create(<Default />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without label', () => {
    const testRenderer = renderer.create(<NoLabel />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const testRenderer = renderer.create(<Disabled />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders checked', () => {
    const testRenderer = renderer.create(<Checked />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders readOnly', () => {
    const testRenderer = renderer.create(<ReadOnly />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
