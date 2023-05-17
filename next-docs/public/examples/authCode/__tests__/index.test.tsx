/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import ErrorState from '../ErrorState';
import ReactHookForm from '../ReactHookForm';
import ReactHookFormAuto from '../ReactHookFormAuto';
import AllowedCharacters from '../AllowedCharacters';
import FourChars from '../FourChars';
import Expandable from '../Expandable';
import IsPassword from '../IsPassword';
import Placeholder from '../Placeholder';
import Sizes from '../Sizes';
import Stretch from '../Stretch';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('AuthCode', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders React Hook Form integration - Manual Submit', () => {
    const tree = render(<ReactHookForm />);
    expect(tree).toMatchSnapshot();
  });
  it('renders React Hook Form integration - Auto Submit', () => {
    const tree = render(<ReactHookFormAuto />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Allowed Characters', () => {
    const tree = render(<AllowedCharacters />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Custom length', () => {
    const tree = render(<FourChars />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Custom length', () => {
    const tree = render(<ReactHookFormAuto />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(<ErrorState />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Placeholder', () => {
    const tree = render(<Placeholder />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Password', () => {
    const tree = render(<IsPassword />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Stretch', () => {
    const tree = render(<Stretch />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Expandable', () => {
    const tree = render(<Expandable />);
    expect(tree).toMatchSnapshot();
  });
});

describe('AuthCode in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders React Hook Form integration - Manual Submit', () => {
    const tree = render(withRtl(<ReactHookForm />));
    expect(tree).toMatchSnapshot();
  });
  it('renders React Hook Form integration - Auto Submit', () => {
    const tree = render(withRtl(<ReactHookFormAuto />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Allowed Characters', () => {
    const tree = render(withRtl(<AllowedCharacters />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Custom length', () => {
    const tree = render(withRtl(<FourChars />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Custom length', () => {
    const tree = render(withRtl(<ReactHookFormAuto />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(withRtl(<ErrorState />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Placeholder', () => {
    const tree = render(withRtl(<Placeholder />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Password', () => {
    const tree = render(withRtl(<IsPassword />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Stretch', () => {
    const tree = render(withRtl(<Stretch />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Expandable', () => {
    const tree = render(withRtl(<Expandable />));
    expect(tree).toMatchSnapshot();
  });
});
