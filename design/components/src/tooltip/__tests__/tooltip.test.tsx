/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';

import { Tooltip } from '..';

const Caption = () => <p>Hi, I'm a Tooltip</p>;
const testProps = { id: 'test-id' };

describe('Tooltip', () => {
  test('renders hidden and left-aligned by default', () => {
    const tooltip = create(
      <Tooltip {...testProps}>
        <Caption />
      </Tooltip>
    );

    expect(tooltip).toMatchSnapshot();
  });

  test('renders as active when defined', () => {
    const tooltip = create(
      <Tooltip active {...testProps}>
        <Caption />
      </Tooltip>
    );

    expect(tooltip).toMatchSnapshot();
  });

  describe('alignment', () => {
    test('right-aligned', () => {
      const tooltip = create(
        <Tooltip active align="right" {...testProps}>
          <Caption />
        </Tooltip>
      );

      expect(tooltip).toMatchSnapshot();
    });
  });

  describe('renders with close button if onClose handler was passed', () => {
    test('closeable', () => {
      const tooltip = create(
        <Tooltip
          onClose={() => {
            console.log('Closed');
          }}
          {...testProps}
        >
          <Caption />
        </Tooltip>
      );

      expect(tooltip).toMatchSnapshot();
    });
  });

  test('renders as an error', () => {
    const tooltip = create(
      <Tooltip active error {...testProps}>
        <Caption />
      </Tooltip>
    );

    expect(tooltip).toMatchSnapshot();
  });
});
