import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import MediaObject from '../MediaObject';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('MediaObject', () => {
  test('renders with `default` settings', () => {
    const mediaObject = create(
      renderWithTheme(
        <MediaObject>
          <img alt="Example" src="https://via.placeholder.com/50C" />
          <div>
            <p>Live chat</p>
            <p>We offer 24/7 support</p>
          </div>
        </MediaObject>
      )
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders with custom CSS grid props', () => {
    const mediaObject = create(
      renderWithTheme(
        <React.Fragment>
          <MediaObject gridGap="2rem" alignItems="top">
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>
          <MediaObject gridGap="large" alignItems="top">
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>
        </React.Fragment>
      )
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders with custom media size', () => {
    const mediaObject = create(
      renderWithTheme(
        <React.Fragment>
          <MediaObject mediaWidth="40px">
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>
          <MediaObject mediaWidth="xlarge">
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>
        </React.Fragment>
      )
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders in reverse', () => {
    const mediaObject = create(
      renderWithTheme(
        <div>
          <MediaObject reverse>
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>

          <MediaObject reverse textAlign="right">
            <img alt="Example" src="https://via.placeholder.com/50C" />
            <div>
              <p>Live chat</p>
              <p>We offer 24/7 support</p>
            </div>
          </MediaObject>
        </div>
      )
    );

    expect(mediaObject).toMatchSnapshot();
  });
});
