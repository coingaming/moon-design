import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/chip/Active';
import Icons from '../../public/examples/chip/Icons';
import Sizes from '../../public/examples/chip/Sizes';
import Stroke from '../../public/examples/chip/Stroke';
import WithStroke from '../../public/examples/chip/WithStroke';
import useExamples from '../../utils/useExamples';

const PageChip = () => {
  const examples = useExamples('chip');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Chip
        </Heading>
        <Text>
          Chips are compact little units that represent actions, filters or
          choices. When shown, they allow users to prompt actions, filter
          games/content and choose options. We use three types of chips in the
          Moon:
        </Text>
        <div className="grid gap-2 mt-2">
          <div>
            <Heading as="h4" size={18}>
              Action chip
            </Heading>
            <Text>
              Action chips prompt actions related to the game/content.
            </Text>
          </div>
          <div>
            <Heading as="h4" size={18}>
              Filter chip
            </Heading>
            <Text>Filter chips let users sieve through large categories.</Text>
          </div>
          <div>
            <Heading as="h4" size={18}>
              Selection chip
            </Heading>
            <Text>
              Selection chips allow users to select options that matter to them.
            </Text>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Active State"
          isGrayBg
          preview={<Active />}
          code={examples ? examples.Active : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="IsStroke"
          isGrayBg
          preview={<Stroke />}
          code={examples ? examples.Stroke : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icons"
          isGrayBg
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icons with isStroke"
          isGrayBg
          preview={<WithStroke />}
          code={examples ? examples.WithStroke : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'size',
            type: 'small | medium',
            required: false,
            default: 'medium',
            description: 'Size of Chip',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Left icon element',
          },
          {
            name: 'iconRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Right icon element',
          },
          {
            name: 'iconOnly',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Icon only element',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Active state',
          },
          {
            name: 'isStroke',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Show stroke on hover/active',
          },
        ]}
      />
    </>
  );
};

export default PageChip;
