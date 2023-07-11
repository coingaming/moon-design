import React from 'react';
import Link from 'next/link';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/insetNativeSelect/Bg';
import Default from '../../public/examples/insetNativeSelect/Default';
import States from '../../public/examples/insetNativeSelect/States';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('insetNativeSelect');
  const { name, text, image } = getComponent('InsetNativeSelect');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isAriaSupport>
        <p>{text}</p>
        <p>
          When collapsed it shows the currently selected option and when
          expanded, it shows a scrollable list of predefined options for the
          user to choose from. Moon.io supports two types of selects, one whichs
          opens browser's native styling option list and{' '}
          <Link
            href="/core/dropdown"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          >
            Dropdown
          </Link>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Different states"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />
      <Preview
        title="Custom styles"
        preview={<Bg />}
        code={examples ? examples.Bg : 'Loading'}
      />

      <PropsTable
        title="Input props"
        data={[
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for select',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;
