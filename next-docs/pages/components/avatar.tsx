import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/avatar/Active';
import Customization from '../../public/examples/avatar/Customization';
import Default from '../../public/examples/avatar/Default';
import Sizes from '../../public/examples/avatar/Sizes';
import StatusOrigin from '../../public/examples/avatar/StatusOrigin';
import Variants from '../../public/examples/avatar/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('avatar');
  const { name, text, image } = getComponent('Avatar');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
      >
        <p>{text}</p>
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
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Avatar props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'imageUrl',
            type: 'string',
            required: false,
            default: '-',
            description: 'Path to the image',
          },
          {
            name: 'size',
            type: 'xs | sm | md | lg | xl | 2xl',
            required: false,
            default: 'md',
            description: 'Size of avatar',
          },
        ]}
      />
      <PropsTable
        title="Avatar.Status props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'position',
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
