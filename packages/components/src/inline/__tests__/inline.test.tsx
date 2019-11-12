import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { Inline } from '../inline';

const TestItems = () => (
  <>
    <button type="button">Button 1</button>
    <button type="button">Button 2</button>
    <button type="button">Button 3</button>
  </>
);

describe('Inline', () => {
  test('renders with `default` spacing', () => {
    const inline = create(
      <Inline>
        <TestItems />
      </Inline>
    );

    expect(inline).toMatchSnapshot();
  });

  test('renders with adjusted spacing', () => {
    const inline = create(
      <Inline space={30}>
        <TestItems />
      </Inline>
    );

    expect(inline).toMatchSnapshot();
  });

  test('renders with custom font-size', () => {
    const inline = create(
      <Inline fontSize={16}>
        <TestItems />
      </Inline>
    );

    expect(inline).toMatchSnapshot();
  });
});
