import React from 'react';
import { Avatar } from '@heathmont/moon-components';
import useSWR from 'swr';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import Image from '../../public/examples/avatar/Image';
import Letter from '../../public/examples/avatar/Letter';
import Fallbacks from '../../public/examples/avatar/Letter';
import Colours from '../../public/examples/avatar/Colours';
import Statuses from '../../public/examples/avatar/Statuses';
import StatusPositions from '../../public/examples/avatar/StatusPositions';

export default function PageAvatar() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/avatar', fetcher);

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Avatar</h1>
        <p className="text-lg mt-4">
          Component for displaying user profile image or placeholder if no
          image.
        </p>
      </section>

      {/* Image avatars */}
      <section className="mt-8">
        <Preview
          title="Image avatars"
          preview={<Image />}
          code={data && data.result ? data.result.Image : 'Loading'}
        />
      </section>

      {/* Letter avatars */}
      <section className="mt-8">
        <Preview
          title="Letter avatars"
          preview={<Letter />}
          code={data && data.result ? data.result.Letter : 'Loading'}
        />
      </section>

      {/* Fallbacks */}
      <section className="mt-8">
        <Preview
          title="Fallbacks"
          preview={<Fallbacks />}
          code={data && data.result ? data.result.Fallbacks : 'Loading'}
        />
      </section>

      {/* Different colours */}
      <section className="mt-8">
        <Preview
          title="Different colours"
          preview={<Colours />}
          code={data && data.result ? data.result.Colours : 'Loading'}
        />
      </section>

      {/* With status */}
      <section className="mt-8">
        <Preview
          title="With status"
          preview={<Statuses />}
          code={data && data.result ? data.result.Statuses : 'Loading'}
        />
      </section>

      {/* Status Position*/}
      <section className="mt-8">
        <Preview
          title="Status Position"
          preview={<StatusPositions />}
          code={data && data.result ? data.result.StatusPositions : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Avatar component</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'xsmall | small | medium | large',
              required: false,
              default: 'medium',
              description: 'Size for avatar',
            },
            {
              name: 'name',
              type: 'string | JSX.Element',
              required: false,
              default: '-',
              description: 'Сapital letters of name',
            },
            {
              name: 'imageUrl',
              type: 'string',
              required: false,
              default: '-',
              description: 'Path to the image',
            },
            {
              name: 'statusOrigin',
              type: 'StatusOrigin',
              required: false,
              default: '-',
              description: 'Position for status indication',
            },
            {
              name: 'isStatusActive',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Active/inactive state for status indication',
            },
            {
              name: 'color',
              type: 'ColorProps',
              required: false,
              default: '-',
              description: 'Text color',
            },
            {
              name: 'backgroundColor',
              type: 'ColorProps',
              required: false,
              default: '-',
              description: 'Background color',
            },
          ]}
        />
      </section>
      <section className="mt-14">
        <h2 className="text-2xl mb-4">StatusOrigin Prop</h2>
        <Table
          data={[
            {
              name: 'vertical',
              type: 'top | bottom',
              required: true,
              default: '-',
              description: 'Vertical align for status indication',
            },
            {
              name: 'horizontal',
              type: 'left | right',
              required: true,
              default: '-',
              description: 'Horizontal align for status indication',
            },
          ]}
        />
      </section>
    </>
  );
}
