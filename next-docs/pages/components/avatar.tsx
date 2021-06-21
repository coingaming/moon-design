import React from 'react';

import { Avatar } from '@heathmont/moon-components';
import Preview from '../../components/codePreview/Preview';

export default function PageAvatar() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Avatar</h1>
        <p className="text-lg mt-4">
          Component for displaying user profile image or placeholder if no image.
        </p>
      </section>

      {/* Image avatars */}
      <section className="mt-8">
        <Preview
          title="Image avatars"
          preview={
            <div className="flex justify-around items-center w-full">
              <Avatar
                imageUrl="https://www.fillmurray.com/200/200"
                size="xsmall"
              />
              <Avatar
                imageUrl="https://www.fillmurray.com/200/200"
                size="small"
              />
              <Avatar
                imageUrl="https://www.fillmurray.com/200/200"
                size="medium"
              />
              <Avatar
                imageUrl="https://www.fillmurray.com/200/200"
                size="large"
              />
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar
  imageUrl="https://www.fillmurray.com/200/200"
  size="xsmall"
/>

<Avatar
  imageUrl="https://www.fillmurray.com/200/200"
  size="small"
/>

<Avatar
  imageUrl="https://www.fillmurray.com/200/200"
  size="medium"
/>

<Avatar
  imageUrl="https://www.fillmurray.com/200/200"
  size="large"
/>
`}
        />
      </section>

      {/* Letter avatars */}
      <section className="mt-8">
        <Preview
          title="Letter avatars"
          preview={
            <div className="flex justify-around items-center w-full">
              <Avatar
                name="JS"
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="xsmall"
              />
              <Avatar
                name="JS"
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="small"
              />
              <Avatar
                name="JS"
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="medium"
              />
              <Avatar
                name="JS"
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="large"
              />
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar
  name="JS"
  color="gohan.100"
  backgroundColor="piccolo.100"
  size="xsmall"
/>

<Avatar
  name="JS"
  color="gohan.100"
  backgroundColor="piccolo.100"
  size="small"
/>

<Avatar
  name="JS"
  color="gohan.100"
  backgroundColor="piccolo.100"
  size="medium"
/>

<Avatar
  name="JS"
  color="gohan.100"
  backgroundColor="piccolo.100"
  size="large"
/>
`}
        />
      </section>

      {/* Fallbacks */}
      <section className="mt-8">
        <Preview
          title="Fallbacks"
          preview={
            <div className="flex justify-around items-center w-full">
              <Avatar
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="xsmall"
              />
              <Avatar
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="small"
              />
              <Avatar
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="medium"
              />
              <Avatar
                color="gohan.100"
                backgroundColor="piccolo.100"
                size="large"
              />
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar color="gohan.100" backgroundColor="piccolo.100" size="xsmall" />

<Avatar color="gohan.100" backgroundColor="piccolo.100" size="small" />

<Avatar color="gohan.100" backgroundColor="piccolo.100" size="medium" />

<Avatar color="gohan.100" backgroundColor="piccolo.100" size="large" />
`}
        />
      </section>

      {/* Different colours */}
      <section className="mt-8">
        <Preview
          title="Different colours"
          preview={
            <div className="flex justify-around items-center w-full">
              <Avatar color="gohan.100" backgroundColor="piccolo.100" />
              <Avatar color="piccolo.100" backgroundColor="gohan.100" />
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar color="gohan.100" backgroundColor="piccolo.100" />

<Avatar color="piccolo.100" backgroundColor="gohan.100" />
`}
        />
      </section>
    </>
  );
}
