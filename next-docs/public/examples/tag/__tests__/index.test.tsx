/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Customization from '../Customization';
import Sizes from '../Sizes';
import Icons from '../Icons';
import LetterCases from '../LetterCases';
import Default from '../Default';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Tag', () => {
  afterEach(cleanup);
  it('renders Deafult', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(<Icons />);
    expect(tree).toMatchSnapshot();
  });
  it('renders LetterCases', () => {
    const tree = render(<LetterCases />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Tag in RTL', () => {
  afterEach(cleanup);
  it('renders Deafult', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(withRtl(<Icons />));
    expect(tree).toMatchSnapshot();
  });
  it('renders LetterCases', () => {
    const tree = render(withRtl(<LetterCases />));
    expect(tree).toMatchSnapshot();
  });
});
