import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import ActiveStatus from '../../public/examples/avatar/ActiveStatus';
import Colours from '../../public/examples/avatar/Colours';
import Sizes from '../../public/examples/avatar/Sizes';
import StatusOrigin from '../../public/examples/avatar/StatusOrigin';
import Variants from '../../public/examples/avatar/Variants';
import useExamples from '../../utils/useExamples';

const PageAvatar = () => {
  const examples = useExamples('avatar');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Avatar
        </Heading>
        <Text>
          Avatars are used to represent an individual, a business, or a
          celestial being when they interact with any Coingaming brand. While
          they usually consist of an image, avatars are adaptable - letters or
          object icons may sometimes be used as fallbacks.
        </Text>
      </section>

      {/* Variants */}
      <section className="mt-8">
        <Preview
          title="Variants"
          preview={<Variants />}
          code={examples ? examples.Variants : 'Loading'}
        />
      </section>

      {/* Different colours */}
      <section className="mt-8">
        <Preview
          title="Different colours"
          preview={<Colours />}
          code={examples ? examples.Colours : 'Loading'}
        />
      </section>

      {/* Different sizes */}
      <section className="mt-8">
        <Preview
          title="Different sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      {/* Active status */}
      <section className="mt-8">
        <Preview
          title="Active status"
          preview={<ActiveStatus />}
          code={examples ? examples.ActiveStatus : 'Loading'}
        />
      </section>

      {/* Status Origin */}
      <section className="mt-8">
        <Preview
          title="Status Origin"
          preview={<StatusOrigin />}
          code={examples ? examples.StatusOrigin : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'size',
            type: 'xsmall | small | medium | large | xlarge | twoxlarge',
            required: false,
            default: 'medium',
            description: 'Size for avatar',
          },
          {
            name: 'name',
            type: 'string | JSX.Element',
            required: false,
            default: '-',
            description: 'Capital letters of name',
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
            default: 'bottom, right',
            description: 'Position for status indication',
          },
          {
            name: 'isStatusActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Active state for status indication',
          },
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: 'bulma.100',
            description: 'Text color',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: 'gohan.100',
            description: 'Background color',
          },
        ]}
      />
    </>
  );
};

export default PageAvatar;
