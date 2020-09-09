import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Stack from '../Stack';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const TestItems = () => (
  <>
    <h1>Lorem Ipsum Dolor Sit Amet.</h1>
    <p>
      Consectetur adipiscing elit. Nullam gravida ex tempor, ornare sapien a,
      sodales velit. Curabitur ac ultrices massa, eu scelerisque mauris.
    </p>
    <p>
      Donec maximus purus at tempor elementum. Donec commodo aliquam metus, et
      vestibulum felis venenatis pellentesque.
    </p>
    <p>
      Phasellus felis sem, convallis eget pretium vel, faucibus sit amet nulla.
      Fusce auctor nibh non libero sagittis, semper sagittis ipsum euismod.
    </p>
    <div>
      <p>
        Donec maximus purus at tempor elementum. Donec commodo aliquam metus, et
        vestibulum felis venenatis pellentesque.
      </p>
      <p>
        Phasellus felis sem, convallis eget pretium vel, faucibus sit amet
        nulla. Fusce auctor nibh non libero sagittis, semper sagittis ipsum
        euismod.
      </p>
    </div>
  </>
);

describe('Stack', () => {
  test('renders with `default` spacing', () => {
    const stack = create(
      renderWithTheme(
        <Stack>
          <TestItems />
        </Stack>
      )
    );

    expect(stack).toMatchSnapshot();
  });

  test('renders with adjusted spacing', () => {
    const stack = create(
      renderWithTheme(
        <Stack space={30}>
          <TestItems />
        </Stack>
      )
    );

    expect(stack).toMatchSnapshot();
  });

  test('renders with theme key', () => {
    const stack = create(
      renderWithTheme(
        <Stack space="large">
          <TestItems />
        </Stack>
      )
    );

    expect(stack).toMatchSnapshot();
  });
});
