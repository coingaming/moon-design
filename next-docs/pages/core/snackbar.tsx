import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/snackbarTW/Default';
import DefaultWithClose from '../../public/examples/snackbarTW/DefaultWithClose';
import DefaultWithMultiLine from '../../public/examples/snackbarTW/DefaultWithMultiLine';
import DefaultWithMultiLineWithClose from '../../public/examples/snackbarTW/DefaultWithMultiLineWithClose';
import MultiLineWithIcon from '../../public/examples/snackbarTW/MultiLineWithIcon';
import MultiLineWithIconAndClose from '../../public/examples/snackbarTW/MultiLineWithIconAndClose';
import SingleLineWithIconAndClose from '../../public/examples/snackbarTW/SingleLineWithIconAndClose';
import TypedMultiLineWithIconAndClose from '../../public/examples/snackbarTW/TypedMultiLineWithIconAndClose';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('SnackbarTW');
  return (
    <>
      <ComponentPageDescription title="Snackbar">
        <p>
          A type of alert which appears in a layer above other content, visually
          similar to a mobile or desktop push notification.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Default With Close"
        preview={<DefaultWithClose />}
        code={examples ? examples.DefaultWithClose : 'Loading'}
      />
      <Preview
        title="Default With Muti Line"
        preview={<DefaultWithMultiLine />}
        code={examples ? examples.DefaultWithMultiLine : 'Loading'}
      />
      <Preview
        title="Default With Muti Line With Close"
        preview={<DefaultWithMultiLineWithClose />}
        code={examples ? examples.DefaultWithMultiLineWithClose : 'Loading'}
      />
            <Preview
        title="Single Line With Icon And Close"
        preview={<SingleLineWithIconAndClose/>}
        code={examples ? examples.SingleLineWithIconAndClose : 'Loading'}
      />
          <Preview
        title="Muti Line With Icon"
        preview={<MultiLineWithIcon/>}
        code={examples ? examples.MultiLineWithIcon : 'Loading'}
      />
           <Preview
        title="Muti Line With Icon And Close"
        preview={<MultiLineWithIconAndClose/>}
        code={examples ? examples.MultiLineWithIconAndClose : 'Loading'}
      />
           <Preview
        title="Typed Muti Line With Icon And Close"
        preview={<TypedMultiLineWithIconAndClose/>}
        code={examples ? examples.TypedMultiLineWithIconAndClose : 'Loading'}
      />
      <PropsTable
        title="Snackbar props"
        data={[
          {
            name: 'className',
            type: 'Tailwind classes',
            required: false,
            default: '-',
            description: 'Change the styles',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'autoClose',
            type: 'number',
            required: false,
            default: 6000,
            description:
              'Change the duration the snackbar takes',
          },
          {
            name: 'type',
            required: false,
            type: 'success | error | info | warning',
            default: '-',
            description:
              'Change the type of the snackbar using the preset types',
          },
          {
            name: 'position',
            required: true,
            type: 'top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
            default: 'top-right',
            description: 'Change the position of snackbar',
          },
        ]}
      />
    </>
  );
};

export default Example;
