import * as React from 'react';
import { create } from 'react-test-renderer';
import { Header, HeaderBack, HeaderTitle } from '..';

describe('Header', () => {
  test('renders correctly with title', () => {
    const header = create(
      <Header>
        <HeaderTitle>Page Title</HeaderTitle>
      </Header>
    );

    expect(header).toMatchSnapshot();
  });

  test('renders correctly with title and back button', () => {
    const header = create(
      <Header>
        <HeaderBack href="../">Back to Cashier</HeaderBack>
        <HeaderTitle>Page Title</HeaderTitle>
      </Header>
    );

    expect(header).toMatchSnapshot();
  });
});
