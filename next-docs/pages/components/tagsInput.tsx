import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
/*import PropsTable from '../../components/PropsTable';*/
import Default from '../../public/examples/tagsInput/Default';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'TagsInput';

const PageTagsInput = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);

  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isAriaSupport
        isRtlSupport
        isInProgress
      >
        <p>{text}</p>
        <p>
          These selected text entries are being dispalyed as tags. Tags represent a set of interactive keywords that help organise and categorise objects.
        </p>
        <p>
          Tags can be added or removed from an input element.
        </p>
      </ComponentPageDescription>

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
{/*
      <PropsTable
        title="Input props"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: 'md',
            description: 'Input size',
          },
          {
            name: 'type',
            type: 'date | datetime-local | email | number | password | search | tel | text | time | url | string',
            required: false,
            default: 'text',
            description: 'Input type',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Placeholder for input',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for input',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: false,
            default: '-',
            description: 'RTL/LTR direction of label',
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
      */}
    </>
  );
};

PageTagsInput.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTagsInput;
