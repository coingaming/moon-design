import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Disabled from '../../public/examples/combobox/Disabled';
import Error from '../../public/examples/combobox/Error';
import Options from '../../public/examples/combobox/Options';
import WithLabel from '../../public/examples/combobox/WithLabel';
import WithoutLabel from '../../public/examples/combobox/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('combobox');
  const { name, text, image } = getComponent('Combobox');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isInProgress
      >
        <p>{text}</p>
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
