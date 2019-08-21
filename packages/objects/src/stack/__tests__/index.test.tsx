/** @jsx jsx */
import { jsx } from '@emotion/core';
import { create } from 'react-test-renderer';

import { Stack } from '..';

describe('Stack', () => {
  test('renders with `default` spacing', () => {
    const stack = create(
      <Stack>
        <h1>Lorem Ipsum Dolor Sit Amet.</h1>
        <p>
          Consectetur adipiscing elit. Nullam gravida ex tempor, ornare sapien
          a, sodales velit. Curabitur ac ultrices massa, eu scelerisque mauris.
        </p>
        <p>
          Donec maximus purus at tempor elementum. Donec commodo aliquam metus,
          et vestibulum felis venenatis pellentesque.
        </p>
        <p>
          Phasellus felis sem, convallis eget pretium vel, faucibus sit amet
          nulla. Fusce auctor nibh non libero sagittis, semper sagittis ipsum
          euismod.
        </p>
        <div>
          <p>
            Donec maximus purus at tempor elementum. Donec commodo aliquam
            metus, et vestibulum felis venenatis pellentesque.
          </p>
          <p>
            Phasellus felis sem, convallis eget pretium vel, faucibus sit amet
            nulla. Fusce auctor nibh non libero sagittis, semper sagittis ipsum
            euismod.
          </p>
        </div>
      </Stack>
    );

    expect(stack).toMatchSnapshot();
  });

  test('renders with adjusted spacing', () => {
    const stack = create(
      <Stack space="0.5rem">
        <h1>Lorem Ipsum Dolor Sit Amet.</h1>
        <p>
          Consectetur adipiscing elit. Nullam gravida ex tempor, ornare sapien
          a, sodales velit. Curabitur ac ultrices massa, eu scelerisque mauris.
        </p>
        <p>
          Donec maximus purus at tempor elementum. Donec commodo aliquam metus,
          et vestibulum felis venenatis pellentesque.
        </p>
        <p>
          Phasellus felis sem, convallis eget pretium vel, faucibus sit amet
          nulla. Fusce auctor nibh non libero sagittis, semper sagittis ipsum
          euismod.
        </p>
        <div>
          <p>
            Donec maximus purus at tempor elementum. Donec commodo aliquam
            metus, et vestibulum felis venenatis pellentesque.
          </p>
          <p>
            Phasellus felis sem, convallis eget pretium vel, faucibus sit amet
            nulla. Fusce auctor nibh non libero sagittis, semper sagittis ipsum
            euismod.
          </p>
        </div>
      </Stack>
    );

    expect(stack).toMatchSnapshot();
  });
});
