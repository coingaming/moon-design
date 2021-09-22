import React from 'react';

import { ListItem } from '@heathmont/moon-core';
import { IconClaps } from '@heathmont/moon-assets';
import Preview from '../../components/codePreview/Preview';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

export default function PageListItem() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">List Item</h1>
        <p className="text-lg mt-4">
          List item component. The List item width is determined by the width of
          the parent container.
        </p>
      </section>
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Single line item</h2>
      </section>
      <section className="mt-2">
        <Preview
          preview={
            <div className="flex justify-around items-center w-full min-w-min flex-wrap">
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem>Single line item</ListItem>
              </div>
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem backgroundColor="goku.100">Single line item</ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem>Single line item</ListItem>

<ListItem backgroundColor="goku.100">Single line item</ListItem>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Size (by default: large)"
          preview={
            <div className="flex justify-around items-center w-full min-w-min flex-wrap">
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem backgroundColor="goku.100">Large</ListItem>
              </div>
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem size="medium" backgroundColor="goku.100">
                  Medium
                </ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem backgroundColor="goku.100">Large</ListItem>

<ListItem size="medium" backgroundColor="goku.100">
  Medium
</ListItem> 
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icon and Meta"
          preview={
            <div className="flex justify-around items-center w-full flex-wrap">
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem
                  backgroundColor="goku.100"
                  elementLeft={<IconClaps />}
                >
                  Single line item
                </ListItem>
              </div>
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem
                  backgroundColor="goku.100"
                  elementRight={<IconClaps />}
                >
                  Single line item
                </ListItem>
              </div>
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem
                  backgroundColor="goku.100"
                  elementLeft={<IconClaps />}
                  elementRight={<IconClaps />}
                >
                  Single line item
                </ListItem>
              </div>
              <div className="m-0.5 min-w-full sm:min-w-min">
                <ListItem
                  backgroundColor="goku.100"
                  isMeta
                  elementRight={<>Meta</>}
                >
                  Single line item
                </ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem backgroundColor="goku.100" elementLeft={<IconClaps />}>
  Single line item
</ListItem>

<ListItem backgroundColor="goku.100" elementRight={<IconClaps />}>
  Single line item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  elementLeft={<IconClaps />}
  elementRight={<IconClaps />}
>
  Single line item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  isMeta
  elementRight={<>Meta</>}
>
  Single line item
</ListItem>
`}
        />
      </section>
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Two lines item</h2>
      </section>
      <section className="mt-2">
        <Preview
          preview={
            <div className="flex justify-around items-center w-full min-w-min flex-wrap">
              <div className="min-w-full sm:min-w-min mb-2">
                <ListItem subtext={<SubText />}>Two lines item</ListItem>
              </div>
              <div className="sm:w-96">
                <ListItem backgroundColor="goku.100" subtext={<SubText />}>
                  Two lines item
                </ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Size (by default: large)"
          preview={
            <div className="flex justify-around items-center w-full flex-wrap">
              <div className="m-0.5">
                <ListItem backgroundColor="goku.100" subtext={<SubText />}>
                  Large
                </ListItem>
              </div>
              <div className="m-0.5">
                <ListItem
                  size="medium"
                  backgroundColor="goku.100"
                  subtext={<SubText />}
                >
                  Medium
                </ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem
  backgroundColor="goku.100"
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Large
</ListItem>

<ListItem
  size="medium"
  backgroundColor="goku.100"
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Medium
</ListItem>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icon and Meta"
          preview={
            <div className="flex justify-around items-center w-full flex-wrap">
              <div className="w-72 m-0.5">
                <ListItem
                  backgroundColor="goku.100"
                  elementLeft={<IconClaps />}
                  subtext={<SubText />}
                >
                  Two lines item
                </ListItem>
              </div>
              <div className="w-72 m-0.5">
                <ListItem
                  backgroundColor="goku.100"
                  elementRight={<IconClaps />}
                  subtext={<SubText />}
                >
                  Two lines item
                </ListItem>
              </div>
              <div className="w-72 m-0.5">
                <ListItem
                  backgroundColor="goku.100"
                  elementLeft={<IconClaps />}
                  elementRight={<IconClaps />}
                  subtext={<SubText />}
                >
                  Two lines item
                </ListItem>
              </div>
              <div className="w-72 m-0.5">
                <ListItem
                  backgroundColor="goku.100"
                  isMeta
                  elementRight={<>Meta</>}
                  subtext={<SubText />}
                >
                  Two lines item
                </ListItem>
              </div>
            </div>
          }
          code={`import { ListItem } from '@heathmont/moon-core';

<ListItem
  backgroundColor="goku.100"
  elementLeft={<IconClaps />}
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  elementRight={<IconClaps />}
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  elementLeft={<IconClaps />}
  elementRight={<IconClaps />}
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>

<ListItem
  backgroundColor="goku.100"
  isMeta
  elementRight={<>Meta</>}
  subtext={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>}
>
  Two lines item
</ListItem>
`}
        />
      </section>
    </>
  );
}
