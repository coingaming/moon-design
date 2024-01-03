import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tagsInput/Default';
import LowerCase from '../../public/examples/tagsInput/LowerCase';
import Sizes from '../../public/examples/tagsInput/Sizes';
import States from '../../public/examples/tagsInput/States';
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
          These selected text entries are being displayed as tags. Tags
          represent a set of interactive keywords that help organize and
          categorize objects.
        </p>
        <p>
          Tags can be added by pressing the Enter key or removed by Backspace
          key or the mouse click from the input element.
        </p>
      </ComponentPageDescription>

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <Preview
        title="Different sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />

      <Preview
        title="States"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />

      <Preview
        title="Uppercase & lowercase"
        preview={<LowerCase />}
        code={examples ? examples.LowerCase : 'Loading'}
      />

      <PropsTable
        title="TagsInput props"
        data={[
          {
            name: 'selected',
            type: 'string[]',
            required: true,
            default: '-',
            description: 'The selected dataset',
          },
          {
            name: 'label',
            type: 'string | undefined',
            required: false,
            default: '-',
            description: 'Label title',
          },
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
            name: 'isError',
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
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'onEnter',
            type: '(value: string) => void;',
            required: false,
            default: '-',
            description:
              'The function to select the text and append it to the tag set.',
          },
          {
            name: 'onClear',
            type: '(index: number) => void',
            required: false,
            default: '-',
            description: 'The function to remove the selected tag.',
          },
        ]}
      />

      <PropsTable
        title="TagsInput.SelectedItem"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'index',
            type: 'number',
            required: true,
            default: '-',
            description: 'This data spcifies the key value of the item',
          },
          {
            name: 'label',
            type: 'string',
            required: true,
            default: '-',
            description: 'The text selected as tag',
          },
        ]}
      />
    </>
  );
};

PageTagsInput.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTagsInput;
