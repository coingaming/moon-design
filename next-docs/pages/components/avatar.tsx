import React from 'react';

import { Avatar } from '@heathmont/moon-components';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

export default function PageAvatar() {
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

      {/* With status */}
      <section className="mt-8">
        <Preview
          title="With status"
          preview={
            <div className="flex flex-col justify-around items-center w-full">
              <div className="flex justify-around items-center w-full">
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="xsmall"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="small"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="medium"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
              </div>

              <div className="flex justify-around items-center w-full mt-4">
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="xsmall"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="small"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="medium"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
              </div>
              <div className="flex justify-around items-center w-full mt-4">
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="xsmall"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="small"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="medium"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
              </div>
              <div className="flex justify-around items-center w-full mt-4">
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="xsmall"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="small"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="medium"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
                <Avatar
                  imageUrl="https://www.fillmurray.com/200/200"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  isStatusActive={true}
                />
              </div>
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="xsmall" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="small" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="medium" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}/>

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="xsmall" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="small" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="medium" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true}/>
<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true}/>

<Avatar imageUrl="https://www.fillmurray.com/200/200" size="xsmall" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="small" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="medium" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}/>
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} />

<Avatar imageUrl="https://www.fillmurray.com/200/200" size="xsmall" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true} />
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="small" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true} />
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="medium" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true} />
<Avatar imageUrl="https://www.fillmurray.com/200/200" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} isStatusActive={true} />
`}
        />
      </section>

      {/* Status Position*/}
      <section className="mt-8">
        <Preview
          title="Status Position"
          preview={
            <div className="flex flex-col justify-around items-center w-full">
              <div className="flex justify-around items-center w-full">
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'top', horizontal: 'right' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'top', horizontal: 'left' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Avatar
                  name="JS"
                  color="gohan.100"
                  backgroundColor="piccolo.100"
                  size="large"
                  statusOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                />
              </div>
            </div>
          }
          code={`import { Avatar } from '@heathmont/moon-components';

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'top', horizontal: 'right' }} />

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'top', horizontal: 'left' }} />

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'right' }} />

<Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size="large" statusOrigin={{ vertical: 'bottom', horizontal: 'left' }} />
`}
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
              default: 'goten.100',
              description: 'Text color',
            },
            {
              name: 'backgroundColor',
              type: 'ColorProps',
              required: false,
              default: 'bulma.100',
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
