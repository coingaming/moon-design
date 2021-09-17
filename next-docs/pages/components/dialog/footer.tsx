import React from 'react';

import { Footer } from '@heathmont/moon-core';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import { Button } from '@heathmont/moon-components';

export default function PageDialogFooter() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Footer</h1>
        <p className="text-lg mt-4">
          Footer is a confirmatiuon module to be used in the Dialogs: Modal,
          Popover and the Multi select Dropdown
        </p>
      </section>

      {/* Buttons size: xs */}
      <section className="mt-8">
        <Preview
          title="Buttons size: xs"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="xsmall">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
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
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
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
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="xsmall">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="xsmall">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  secButton={
                    <Button fullWidth variant="tertiary" size="xsmall">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
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
                />
              </div>
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4"></div>
            </div>
          }
          code={`import { Footer } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

<Footer primButton={<Button fullWidth variant="primary" size="xsmall">Button</Button>}

<Footer 
  primButton={<Button fullWidth variant="primary" size="xsmall">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="xsmall">Button</Button>}
/>

<Footer
  primButton={<Button fullWidth variant="primary" size="xsmall">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="xsmall">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="xsmall">Button</Button>}
/>

<Footer
  primButton={<Button fullWidth variant="primary" size="xsmall">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="xsmall">Button</Button>}
/>

<Footer
  secButton={<Button fullWidth variant="tertiary" size="xsmall">Button</Button>}
/>

<Footer
  secButton={<Button fullWidth variant="tertiary" size="xsmall">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="xsmall">Button</Button>}
/>
`}
        />
      </section>

      {/* Buttons size: sm */}
      <section className="mt-8">
        <Preview
          title="Buttons size: sm"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="small">
                      Button
                    </Button>
                  }
                />
              </div>
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4"></div>
            </div>
          }
          code={`import { Footer } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';
          
<Footer primButton={<Button fullWidth variant="primary" size="small">Button</Button>}
          
<Footer 
  primButton={<Button fullWidth variant="primary" size="small">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="small">Button</Button>}
/>

<Footer
  primButton={<Button fullWidth variant="primary" size="small">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="small">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="small">Button</Button>}
/>

<Footer
  primButton={<Button fullWidth variant="primary" size="small">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="small">Button</Button>}
/>

<Footer
  secButton={<Button fullWidth variant="tertiary" size="small">Button</Button>}
/>

<Footer
  secButton={<Button fullWidth variant="tertiary" size="small">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="small">Button</Button>}
/>
`}
        />
      </section>

      {/*Size and Divider*/}
      <section className="mt-8">
        <Preview
          title="Size and Divider"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 mb-4">
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="small">
                      Button
                    </Button>
                  }
                  isDivider={true}
                />
              </div>
              <div className="flex justify-around items-center w-96 mb-4">
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
                  isDivider={true}
                  size="small"
                />
              </div>
            </div>
          }
          code={`import { Footer } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

<Footer
  primButton={<Button fullWidth variant="primary" size="small">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="small">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="small">Button</Button>}
  isDivider
/>

<Footer
  primButton={<Button fullWidth variant="primary" size="xsmall">Button</Button>}
  secButton={<Button fullWidth variant="tertiary" size="xsmall">Button</Button>}
  tertButton={<Button fullWidth variant="secondary" size="xsmall">Button</Button>}
  isDivider
  size="small"
/>
`}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Footer component</h2>
        <Table
          data={[
            {
              name: 'primButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'secButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'tertButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'isDivider',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Add border top for footer',
            },
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: '-',
              description: 'Set paddings around footer',
            },
          ]}
        />
      </section>
    </>
  );
}
