/** @jsx jsx */
import { jsx } from '@emotion/core';
import { create } from 'react-test-renderer';

import { MediaObject } from '..';

describe('MediaObject', () => {
  test('renders with `default` settings', () => {
    const mediaObject = create(
      <MediaObject>
        <img alt="Example" src="https://via.placeholder.com/50C" />
        <div>
          <p>Live chat</p>
          <p>We offer 24/7 support</p>
        </div>
      </MediaObject>
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders with custom CSS grid props', () => {
    const mediaObject = create(
      <MediaObject gridGap="2rem" alignItems="top">
        <img alt="Example" src="https://via.placeholder.com/50C" />
        <div>
          <p>Live chat</p>
          <p>We offer 24/7 support</p>
        </div>
      </MediaObject>
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders with custom media size', () => {
    const mediaObject = create(
      <MediaObject mediaWidth="40px">
        <img alt="Example" src="https://via.placeholder.com/50C" />
        <div>
          <p>Live chat</p>
          <p>We offer 24/7 support</p>
        </div>
      </MediaObject>
    );

    expect(mediaObject).toMatchSnapshot();
  });

  test('renders in reverse', () => {
    const mediaObject = create(
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
    );

    expect(mediaObject).toMatchSnapshot();
  });
});
