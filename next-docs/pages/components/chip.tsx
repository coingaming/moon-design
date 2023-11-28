import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/chip/Active';
import States from '../../public/examples/chip/States';
import Customization from '../../public/examples/chip/Customization';
import Default from '../../public/examples/chip/Default';
import Disabled from '../../public/examples/chip/Disabled';
import Icons from '../../public/examples/chip/Icons';
import IsStroke from '../../public/examples/chip/IsStroke';
import IsStrokeIcons from '../../public/examples/chip/IsStrokeIcons';
import OnClick from '../../public/examples/chip/OnClick';
import Sizes from '../../public/examples/chip/Sizes';
import Variants from '../../public/examples/chip/Variants';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Chip';

const PageChip = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
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
        title="Maintain state on click"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <Preview
        title="Active"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
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
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disabled Chip',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconOnly',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Icon without text',
          },
          {
            name: 'iconRight',
            type: 'React.ReactNode',
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
            description: 'Size of Chip',
          },
          {
            name: 'variant',
            type: 'default | ghost',
            required: false,
            default: 'default',
            description: 'Visual/Logical variant of Chip',
          },
        ]}
      />
    </>
  );
};

PageChip.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageChip;
