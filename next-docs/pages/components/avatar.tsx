import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/avatar/Colours';
import Fallbacks from '../../public/examples/avatar/Fallbacks';
import Image from '../../public/examples/avatar/Image';
import Letter from '../../public/examples/avatar/Letter';
import Sizes from "../../public/examples/avatar/Sizes";
import Statuses from '../../public/examples/avatar/Statuses';
import StatusPositions from '../../public/examples/avatar/StatusPositions';
import useExamples from '../../utils/useExamples';

const PageAvatar = () => {
  const examples = useExamples('avatar');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Avatar</h1>
        <p className="text-lg mt-4">
          Avatars are used to represent an individual,
          a business, or a celestial being when they interact with any Coingaming brand. While they usually consist of an image, avatars are adaptable - letters or object icons may sometimes be used as fallbacks.
        </p>
      </section>

      {/* Image avatars */}
      <section className="mt-8">
        <Preview
          title="Image avatars"
          preview={<Image />}
          code={examples ? examples.Image : 'Loading'}
        />
      </section>

      {/* Letter avatars */}
      <section className="mt-8">
        <Preview
          title="Letter avatars"
          preview={<Letter />}
          code={examples ? examples.Letter : 'Loading'}
        />
      </section>

      {/* Fallbacks */}
      <section className="mt-8">
        <Preview
          title="Fallbacks"
          preview={<Fallbacks />}
          code={examples ? examples.Fallbacks : 'Loading'}
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
          code={examples ? examples.Colours : 'Loading'}
        />
      </section>

      {/* With status */}
      <section className="mt-8">
        <Preview
          title="With status"
          preview={<Statuses />}
          code={examples ? examples.Statuses : 'Loading'}
        />
      </section>

      {/* Status Position*/}
      <section className="mt-8">
        <Preview
          title="Status Position"
          preview={<StatusPositions />}
          code={examples ? examples.StatusPositions : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Avatar component"
        data={[
          {
            name: 'size',
            type: 'xsmall | small | medium | large | xlarge | xxlarge',
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
          {
            name: 'statusOrigin',
            type: 'object { vertical: top | bottom, horizontal: left | right }',
            required: false,
            default: '-',
            description: 'Vertical align for status indication',
          },
        ]}
      />
    </>
  );
};

export default PageAvatar;
