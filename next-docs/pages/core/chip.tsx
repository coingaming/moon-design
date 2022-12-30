import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/chipTW/Active';
import Default from '../../public/examples/chipTW/Default';
import Icons from '../../public/examples/chipTW/Icons';
import IsStroke from '../../public/examples/chipTW/IsStroke';
import IsStrokeIcons from '../../public/examples/chipTW/IsStrokeIcons';
import OnClick from '../../public/examples/chipTW/OnClick';
import Sizes from '../../public/examples/chipTW/Sizes';
import Variants from '../../public/examples/chipTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('chipTW');
  return (
    <>
      <ComponentPageDescription title="Chip" isInProgress isRtlSupport>
        <p>Chips help filter content, or trigger actions.</p>
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
            type: 'JSX.Element',
            required: 'false',
            default: '-',
            description: 'Children content',
          },
          {
            name: 'iconLeft',
            type: 'JSX.Element | boolean',
            required: 'false',
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconOnly',
            type: 'JSX.Element | boolean',
            required: 'false',
            default: '-',
            description: 'Icon without text',
          },
          {
            name: 'iconRight',
            type: 'JSX.Element | boolean',
            required: 'false',
            default: '-',
            description: 'Right icon',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Active state',
          },
          {
            name: 'isStroke',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Shows stroke on hover/active',
          },
          {
            name: 'size',
            type: 'sm | md',
            required: 'false',
            default: 'md',
            description: 'Size of chip',
          },
          {
            name: 'variant',
            type: 'default | ghost',
            required: 'false',
            default: 'default',
            description: 'Visual/Logical variant of chip',
          },
        ]}
      />
    </>
  );
};

export default Example;
