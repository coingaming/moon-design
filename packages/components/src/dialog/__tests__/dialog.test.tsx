import React from 'react';
import { create } from 'react-test-renderer';
import { createGlobalStyle } from 'styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import Dialog from '../Dialog';

const Global = createGlobalStyle({ '&:root': { '--reach-dialog': 1 } });

/**
 * Setup
 *
 * Prevent Reach UI from injecting its own styles.
 * https://ui.reach.tech/styling/
 */
const Setup = ({ children }: any) => (
  <ThemeProvider theme={sportsbetDark}>
    <>
      <Global />
      {children}
    </>
  </ThemeProvider>
);

const ExampleHeading = () => <h1>Lorem ipsum dolor sit amet.</h1>;
const ExampleText = () => (
  <p>
    Consectetur adipiscing elit. Phasellus eget vulputate nibh, nec laoreet
    lectus. Proin at lacus quis justo mattis porta. Nulla sed nisl volutpat,
    varius enim eu, semper augue.
  </p>
);

/**
 * Mocks
 */
jest.mock('@reach/portal', () => ({ children, ref }: any) => (
  <div ref={ref}>{children}</div>
));

jest.mock('react-focus-lock', () => ({ children, ref }: any) => (
  <div ref={ref} style={{}}>
    {children}
  </div>
));

jest.mock('react-dom', () => ({
  findDOMNode() {
    return null;
  },
  render() {
    return null;
  },
}));

/**
 * Tests
 */
describe('Dialog', () => {
  describe('default', () => {
    test('renders as hidden', () => {
      const dialog = create(
        <Setup>
          <Dialog>
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });

    // test('renders as visible when `showDialog` is set to `true`', () => {
    //   const dialog = create(
    //     <Setup>
    //       <Dialog isOpen>
    //         <ExampleHeading />
    //         <ExampleText />
    //       </Dialog>
    //     </Setup>
    //   );

    //   expect(dialog).toMatchSnapshot();
    // });
  });

  // test('renders with custom `maxWidth`', () => {
  //   const dialog = create(
  //     <Setup>
  //       <Dialog isOpen maxWidth="400">
  //         <ExampleHeading />
  //         <p>
  //           Consectetur adipiscing elit. Phasellus eget vulputate nibh, nec
  //           laoreet lectus. Proin at lacus quis justo mattis porta. Nulla sed
  //           nisl volutpat, varius enim eu, semper augue.
  //         </p>
  //       </Dialog>
  //     </Setup>
  //   );

  //   expect(dialog).toMatchSnapshot();
  // });
});
