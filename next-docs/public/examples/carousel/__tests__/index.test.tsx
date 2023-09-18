/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import '../../../../__mocks__/intersectionObserver';
import Default from '../Default';
import Spaces from '../Spaces';
import CustomizedArrow from '../CustomizedArrow';
import VisibleIndex from '../VisibleIndex';
import Indicators from '../Indicators';
import SelectIndex from '../SelectIndex';
import Autoslide from '../Autoslide';
import Rtl from '../Rtl';

describe('Carousel', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Spaces', () => {
    const tree = render(<Spaces />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomizedArrow', () => {
    const tree = render(<CustomizedArrow />);
    expect(tree).toMatchSnapshot();
  });
  it('renders VisibleIndex', () => {
    const tree = render(<VisibleIndex />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Indicators', () => {
    const tree = render(<Indicators />);
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectIndex', () => {
    const tree = render(<SelectIndex />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Autoslide', () => {
    const tree = render(<Autoslide />);
    expect(tree).toMatchSnapshot();
  });
  it('renders in RTL', () => {
    const tree = render(<Rtl />);
    expect(tree).toMatchSnapshot();
  });
});
