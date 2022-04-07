/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Arrows from '../Arrows';
import Chart from '../Chart';
import Chat from '../Chat';
import Controls from '../Controls';
import Devices from '../Devices';
import Files from '../Files';
import Generic from '../Generic';
import Mail from '../Mail';
import Maps from '../Maps';
import Media from '../Media';
import Notifications from '../Notifications';
import Other from '../Other';
import Security from '../Security';
import Shop from '../Shop';
import Software from '../Software';
import Sport from '../Sport';
import Text from '../Text';
import Time from '../Time';
import Travel from '../Travel';
import Type from '../Type';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const wrapperProps = {
  onClick: (iconName: string) => {},
  selectedIcons: [],
};

const props = {
  fontSize: '14px',
};

describe('Icons', () => {
  it('renders Arrows', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Arrows wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Chart', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Chart wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Chat', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Chat wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Controls', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Controls wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Devices', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Devices wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Files', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Files wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Generic', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Generic wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Mail', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Mail wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Maps', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Maps wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Media', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Media wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Notifications', () => {
    const testRenderer = renderer.create(
      renderWithTheme(
        <Notifications wrapperProps={wrapperProps} props={props} />
      )
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Other', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Other wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Security', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Security wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Shop', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Shop wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Software', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Software wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sport', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Sport wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Text', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Text wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Time', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Time wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Travel', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Travel wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Type', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<Type wrapperProps={wrapperProps} props={props} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
