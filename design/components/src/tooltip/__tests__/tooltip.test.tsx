import * as React from 'react';
import { create } from 'react-test-renderer';
import { Tooltip } from '../';

const testProps = {
  id: 'test-id',
  message: "Hi, I'm a Tooltip",
};

describe('Tooltip', () => {
  test('renders hidden and left-aligned by default', () => {
    const tooltip = create(<Tooltip {...testProps} />);

    expect(tooltip).toMatchSnapshot();
  });

  test('renders as active when defined', () => {
    const tooltip = create(<Tooltip active {...testProps} />);

    expect(tooltip).toMatchSnapshot();
  });

  describe('alignment', () => {
    test('right-aligned', () => {
      const tooltip = create(<Tooltip active align="right" {...testProps} />);

      expect(tooltip).toMatchSnapshot();
    });
  });

  test('renders as an error', () => {
    const tooltip = create(<Tooltip active error {...testProps} />);

    expect(tooltip).toMatchSnapshot();
  });
});
