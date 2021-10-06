import React from 'react';

import { Popover } from '@heathmont/moon-popover/lib';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import { Footer, Heading, Text } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';
import CodeSnippet from '../../components/CodeSnippet';

const Example = () => {
  return (
    <Popover
      padding={0}
      placement="bottom"
      isOpen={false}
      onVisibilityChange={(status) => console.log('status: ', status)}
      content={
        <div>
          <div className="p-8 space-y-4">
            <Heading size={20}>Agents</Heading>
            <Text size={14}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Ex
            </Text>
          </div>

          <Footer
            primButton={
              <Button fullWidth variant="primary" size="xsmall">
                Button
              </Button>
            }
            secButton={
              <Button fullWidth variant="tertiary" size="xsmall">
                Button
              </Button>
            }
            tertButton={
              <Button fullWidth variant="secondary" size="xsmall">
                Button
              </Button>
            }
            isDivider
            size="small"
          />
        </div>
      }
    >
      <Button variant="primary">Toggle Popover</Button>
    </Popover>
  );
};

const code = `import { Popover } from '@heathmont/moon-popover/lib';
import { Footer, Heading, Text } from '@heathmont/moon-core';

<Popover
  padding={0}
  placement="bottom"
  isOpen={false}
  onVisibilityChange={(status) => console.log('status: ', status)}
  content={
    <>
      <div className="p-8 space-y-4">
        <Heading size={20}>Agents</Heading>
        <Text size={14}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Ex
        </Text>
      </div>

      <Footer
        primButton={
          <Button fullWidth variant="primary" size="xsmall">
            Button
          </Button>
        }
        secButton={
          <Button fullWidth variant="tertiary" size="xsmall">
            Button
          </Button>
        }
        tertButton={
          <Button fullWidth variant="secondary" size="xsmall">
            Button
          </Button>
        }
        isDivider
        size="small"
      />
    </>
  }
>
  <Button variant="primary">Toggle Popover</Button>
</Popover>
`;

export default function PagePopover() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Popover</h1>
        {/* <p className="text-lg mt-4">
          Pagination component based on{' '}
          <a
            className="underline"
            href="https://github.com/AdeleD/react-paginate#readme"
          >
            react-paginate
          </a>
          .
        </p> */}
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview title="Default" preview={<Example />} code={code} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'content',
              type: 'React.ReactNode',
              required: true,
              default: '-',
              description: `Content of popover.`,
            },
            {
              name: 'defaultState',
              type: 'boolean',
              required: false,
              default: 'false',
              description: `Open/Closed popover by default.`,
            },
            {
              name: 'closeOnClickOutside',
              type: 'boolean',
              required: false,
              default: 'true',
              description: 'Close popover if clicked outside.',
            },
            {
              name: 'placement',
              type: 'Placement',
              required: false,
              default: '-',
              description: 'Placement of popover.',
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <CodeSnippet>
          {`type Placement = 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'auto'
| 'auto-start'
| 'auto-end';
`}
        </CodeSnippet>
      </section>
    </>
  );
}
