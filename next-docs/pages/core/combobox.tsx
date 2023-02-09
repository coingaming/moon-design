import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Disabled from '../../public/examples/combobox/Disabled';
import Error from '../../public/examples/combobox/Error';
import Options from '../../public/examples/combobox/Options';
import WithLabel from '../../public/examples/combobox/WithLabel';
import WithoutLabel from '../../public/examples/combobox/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('combobox');
  return (
    <>
      <ComponentPageDescription title="Combobox" isInProgress>
        <p>
          Comboboxes are the foundation of accessible autocompletes and command
          palettes for your app, complete with robust support for keyboard
          navigation. You are completely in charge of how you filter the
          results, whether it be with a fuzzy search library client-side or by
          making server-side requests to an API. In these examples we will keep
          the logic simple for demo purposes.
        </p>
      </ComponentPageDescription>
      <Preview
        title="With Label"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />

      <Preview
        title="Formatted options"
        preview={<Options />}
        code={examples ? examples.Options : 'Loading'}
      />

      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />

      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />

      <Preview
        title="Without label"
        preview={<WithoutLabel />}
        code={examples ? examples.WithoutLabel : 'Loading'}
      />
    </>
  );
};

export default Example;
