/**
 * @jest-environment jsdom
 */

import React from 'react';
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
import DefaultIconSet from '../DefaultIconSet';

const wrapperProps = {
  onClick: (iconName: string) => {},
  selectedIcons: [],
};

const props = {
  className: 'text-[14px]',
};

describe('Icons', () => {
  it('renders DefaultIconSet', () => {
    const testRender = renderer.create(<DefaultIconSet />);
  });
  it('renders Arrows', () => {
    const testRenderer = renderer.create(
      <Arrows wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Chart', () => {
    const testRenderer = renderer.create(
      <Chart wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Chat', () => {
    const testRenderer = renderer.create(
      <Chat wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Controls', () => {
    const testRenderer = renderer.create(
      <Controls wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Devices', () => {
    const testRenderer = renderer.create(
      <Devices wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Files', () => {
    const testRenderer = renderer.create(
      <Files wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Generic', () => {
    const testRenderer = renderer.create(
      <Generic wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Mail', () => {
    const testRenderer = renderer.create(
      <Mail wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Maps', () => {
    const testRenderer = renderer.create(
      <Maps wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Media', () => {
    const testRenderer = renderer.create(
      <Media wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Notifications', () => {
    const testRenderer = renderer.create(
      <Notifications wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Other', () => {
    const testRenderer = renderer.create(
      <Other wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Security', () => {
    const testRenderer = renderer.create(
      <Security wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Shop', () => {
    const testRenderer = renderer.create(
      <Shop wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Software', () => {
    const testRenderer = renderer.create(
      <Software wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sport', () => {
    const testRenderer = renderer.create(
      <Sport wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Text', () => {
    const testRenderer = renderer.create(
      <Text wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Time', () => {
    const testRenderer = renderer.create(
      <Time wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Travel', () => {
    const testRenderer = renderer.create(
      <Travel wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Type', () => {
    const testRenderer = renderer.create(
      <Type wrapperProps={wrapperProps} props={props} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
