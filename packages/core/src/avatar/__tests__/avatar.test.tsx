import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Avatar from '../Avatar';

describe('Avatar', () => {
  test('renders correctly', () => {
    const avatar = create(renderWithTheme(<Avatar />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with user image', () => {
    const avatar = create(renderWithTheme(<Avatar imageUrl="image-url" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with user name as a string', () => {
    const avatar = create(renderWithTheme(<Avatar name="JS" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with user name as a JSX Element', () => {
    const avatar = create(renderWithTheme(<Avatar name={<span>JS</span>} />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with background color', () => {
    const avatar = create(renderWithTheme(<Avatar backgroundColor="red" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with xsmall size', () => {
    const avatar = create(renderWithTheme(<Avatar size="xsmall" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with small size', () => {
    const avatar = create(renderWithTheme(<Avatar size="small" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with medium size', () => {
    const avatar = create(renderWithTheme(<Avatar size="medium" />));

    expect(avatar).toMatchSnapshot();
  });

  test('renders correctly with large size', () => {
    const avatar = create(renderWithTheme(<Avatar size="large" />));

    expect(avatar).toMatchSnapshot();
  });
});
