import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/checkbox/Checked';
import Disabled from '../../public/examples/checkbox/Disabled';
import Example from '../../public/examples/checkbox/Example';
import NoLabel from '../../public/examples/checkbox/NoLabel';
import Readonly from '../../public/examples/checkbox/Readonly';
import useExamples from '../../utils/useExamples';

export default function PageAccordion() {
  const examples = useExamples('checkbox');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Checkbox
        </Heading>
        <Text>
          Checkboxes are used as a list in our forms and signup pages so users
          can select options of their choice. Users are free to choose how many
          options to select, from zero to all of them.
        </Text>
        <Text>
          As each checkbox is independent, this means that additional checkboxes
          do not affect any other selections… or planets.
        </Text>
      </section>
      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Checkbox"
          isGrayBg
          preview={<Example />}
          code={examples ? examples.Example : 'Loading'}
        />
      </section>
      {/* Checked */}
      <section className="mt-8">
        <Preview
          title="Checked"
          isGrayBg
          preview={<Checked />}
          code={examples ? examples.Checked : 'Loading'}
        />
      </section>
      {/* No label */}
      <section className="mt-8">
        <Preview
          title="No label"
          isGrayBg
          preview={<NoLabel />}
          code={examples ? examples.Example : 'Loading'}
        />
      </section>
      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          isGrayBg
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>
      {/* Readonly */}
      <section className="mt-8">
        <Preview
          title="Readonly"
          isGrayBg
          preview={<Readonly />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Preset value for checkbox state',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Checkbox disabled state',
          },
          {
            name: 'readOnly',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              "Checkbox isn't disabled but its value can't be changed",
          },
          {
            name: 'label',
            type: 'string',
            required: false,
            default: '-',
            description: 'Label that describes checkbox purpose',
          },
        ]}
      />
    </>
  );
}
