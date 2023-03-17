import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/chip/Active';
import Default from '../../public/examples/chip/Default';
import Icons from '../../public/examples/chip/Icons';
import IsStroke from '../../public/examples/chip/IsStroke';
import IsStrokeIcons from '../../public/examples/chip/IsStrokeIcons';
import OnClick from '../../public/examples/chip/OnClick';
import Sizes from '../../public/examples/chip/Sizes';
import Variants from '../../public/examples/chip/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('chip');
  const { name, text, image } = getComponent('Chip');
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
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Active"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="Icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Is Stroke"
        preview={<IsStroke />}
        code={examples ? examples.IsStroke : 'Loading'}
      />
      <Preview
        title="Is Stroke with Icons"
        preview={<IsStrokeIcons />}
        code={examples ? examples.IsStrokeIcons : 'Loading'}
      />
      <Preview
        title="With onClick"
        preview={<OnClick />}
        code={examples ? examples.OnClick : 'Loading'}
      />
      <PropsTable
        title="Chip props"
        data={[
          {
            name: 'children',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'iconLeft',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconOnly',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Icon without text',
          },
          {
            name: 'iconRight',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Right icon',
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
            description: 'Shows stroke on hover/active',
          },
          {
            name: 'size',
            type: 'sm | md',
            required: false,
            default: 'md',
            description: 'Size of chip',
          },
          {
            name: 'variant',
            type: 'default | ghost',
            required: false,
            default: 'default',
            description: 'Visual/Logical variant of chip',
          },
        ]}
      />
    </>
  );
};

export default Example;
