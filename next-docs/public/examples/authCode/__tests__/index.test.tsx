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
import IsPassword from '../IsPassword';
import Gaps from '../Gaps';
import Placeholder from '../Placeholder';
import Hint from '../Hint';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('AuthCode', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ReactHookForm', () => {
    const tree = render(<ReactHookForm />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ReactHookFormAuto', () => {
    const tree = render(<ReactHookFormAuto />);
    expect(tree).toMatchSnapshot();
  });
  it('renders AllowedCharacters', () => {
    const tree = render(<AllowedCharacters />);
    expect(tree).toMatchSnapshot();
  });
  it('renders FourChars', () => {
    const tree = render(<FourChars />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(<ErrorState />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Hint', () => {
    const tree = render(<Hint />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Placeholder', () => {
    const tree = render(<Placeholder />);
    expect(tree).toMatchSnapshot();
  });
  it('renders IsPassword', () => {
    const tree = render(<IsPassword />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Gaps', () => {
    const tree = render(<Gaps />);
    expect(tree).toMatchSnapshot();
  });
});

describe('AuthCode in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ReactHookForm', () => {
    const tree = render(withRtl(<ReactHookForm />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ReactHookFormAuto', () => {
    const tree = render(withRtl(<ReactHookFormAuto />));
    expect(tree).toMatchSnapshot();
  });
  it('renders AllowedCharacters', () => {
    const tree = render(withRtl(<AllowedCharacters />));
    expect(tree).toMatchSnapshot();
  });
  it('renders FourChars', () => {
    const tree = render(withRtl(<FourChars />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(withRtl(<ErrorState />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Hint', () => {
    const tree = render(withRtl(<Hint />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Placeholder', () => {
    const tree = render(withRtl(<Placeholder />));
    expect(tree).toMatchSnapshot();
  });
  it('renders IsPassword', () => {
    const tree = render(withRtl(<IsPassword />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Gaps', () => {
    const tree = render(withRtl(<Gaps />));
    expect(tree).toMatchSnapshot();
  });
});
