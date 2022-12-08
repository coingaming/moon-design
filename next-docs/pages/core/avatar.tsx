import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/avatarTW/Active';
import Colours from '../../public/examples/avatarTW/Colours';
import Default from '../../public/examples/avatarTW/Default';
import Rounded from '../../public/examples/avatarTW/Rounded';
import Sizes from '../../public/examples/avatarTW/Sizes';
import StatusOrigin from '../../public/examples/avatarTW/StatusOrigin';
import Variants from '../../public/examples/avatarTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('avatarTW');
  return (
    <>
      <ComponentPageDescription title="Avatar" isInProgress isRtlSupport>
        <p>
          The Avatar component is typically used to display images, icons, or
          initials representing people or other entities.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Rounded"
        preview={<Rounded />}
        code={examples ? examples.Rounded : 'Loading'}
      />
      <Preview
        title="Custom colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Active status"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="Status origin"
        preview={<StatusOrigin />}
        code={examples ? examples.StatusOrigin : 'Loading'}
      />
      <PropsTable
        title="Avatar props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'bg-gohan',
            description: 'Background colour',
          },
          {
            name: 'color',
            type: 'string',
            required: false,
            default: 'text-bulma',
            description: 'Text colour',
          },
          {
            name: 'imageUrl',
            type: 'string',
            required: false,
            default: '-',
            description: 'Path to the image',
          },
          {
            name: 'isRounded',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Rounded border radius',
          },
          {
            name: 'isStatusActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Active state of status indicator',
          },
          {
            name: 'name',
            type: 'string | JSX.Element',
            required: false,
            default: '-',
            description: 'Capital letters of name',
          },
          {
            name: 'size',
            type: 'xs | sm | md | lg | xl | 2xl',
            required: false,
            default: 'md',
            description: 'Size of avatar',
          },
          {
            name: 'statusOrigin',
            type: "{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }",
            required: false,
            default: "{ vertical: 'bottom', horizontal: 'right' }",
            description: 'Position for status indicator',
          },
        ]}
      />
    </>
  );
};

export default Example;
