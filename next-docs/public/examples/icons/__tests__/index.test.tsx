/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Customization from '../Customization';
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

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

const onClick = () => {};
const selectedIcons = [''];
const wrapperProps = { onClick, selectedIcons };
const props = { className: 'text-moon-32' };

describe('Icons', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Arrows', () => {
    const tree = render(<Arrows wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Chart', () => {
    const tree = render(<Chart wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Chat', () => {
    const tree = render(<Chat wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Controls', () => {
    const tree = render(<Controls wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Devices', () => {
    const tree = render(<Devices wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Files', () => {
    const tree = render(<Files wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Generic', () => {
    const tree = render(<Generic wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Mail', () => {
    const tree = render(<Mail wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Maps', () => {
    const tree = render(<Maps wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Media', () => {
    const tree = render(<Media wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Notifications', () => {
    const tree = render(
      <Notifications wrapperProps={wrapperProps} props={props} />
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Other', () => {
    const tree = render(<Other wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Security', () => {
    const tree = render(<Security wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Shop', () => {
    const tree = render(<Shop wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Software', () => {
    const tree = render(<Software wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sport', () => {
    const tree = render(<Sport wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Text', () => {
    const tree = render(<Text wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Time', () => {
    const tree = render(<Time wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Travel', () => {
    const tree = render(<Travel wrapperProps={wrapperProps} props={props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Icons in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Arrows', () => {
    const tree = render(
      withRtl(<Arrows wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Chart', () => {
    const tree = render(
      withRtl(<Chart wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Chat', () => {
    const tree = render(
      withRtl(<Chat wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Controls', () => {
    const tree = render(
      withRtl(<Controls wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Devices', () => {
    const tree = render(
      withRtl(<Devices wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Files', () => {
    const tree = render(
      withRtl(<Files wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Generic', () => {
    const tree = render(
      withRtl(<Generic wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Mail', () => {
    const tree = render(
      withRtl(<Mail wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Maps', () => {
    const tree = render(
      withRtl(<Maps wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Media', () => {
    const tree = render(
      withRtl(<Media wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Notifications', () => {
    const tree = render(
      withRtl(<Notifications wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Other', () => {
    const tree = render(
      withRtl(<Other wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Security', () => {
    const tree = render(
      withRtl(<Security wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Shop', () => {
    const tree = render(
      withRtl(<Shop wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Software', () => {
    const tree = render(
      withRtl(<Software wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Sport', () => {
    const tree = render(
      withRtl(<Sport wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Text', () => {
    const tree = render(
      withRtl(<Text wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Time', () => {
    const tree = render(
      withRtl(<Time wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Travel', () => {
    const tree = render(
      withRtl(<Travel wrapperProps={wrapperProps} props={props} />)
    );
    expect(tree).toMatchSnapshot();
  });
});
