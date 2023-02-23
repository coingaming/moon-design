import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import AccessValues from '../../public/styledExamples/textInputGroup/AccessValues';
import Combined from '../../public/styledExamples/textInputGroup/Combined';
import CombinedVertical from '../../public/styledExamples/textInputGroup/CombinedVertical';
import Default from '../../public/styledExamples/textInputGroup/Default';
import EventListenerSelect from '../../public/styledExamples/textInputGroup/EventListenerSelect';
import MultiSelect from '../../public/styledExamples/textInputGroup/MultiSelect';
import Rtl from '../../public/styledExamples/textInputGroup/Rtl';
import SingleSelect from '../../public/styledExamples/textInputGroup/SingleSelect';
import SingleSelectRtl from '../../public/styledExamples/textInputGroup/SingleSelectRtl';
import SingleSelectVertical from '../../public/styledExamples/textInputGroup/SingleSelectVertical';
import Types from '../../public/styledExamples/textInputGroup/Types';
import useExamples from '../../utils/useExamples';

const PageTextInputGroup = () => {
  const examples = useExamples('textInputGroup', 'styled');
  return (
    <>
      <ComponentPageDescription title="TextInput Group">
        <DeprecationWarning href="/core/group" name="Group" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Combined"
        preview={<Combined />}
        code={examples ? examples.Combined : 'Loading'}
      />
      <Preview
        title="Combined vertical"
        preview={<CombinedVertical />}
        code={examples ? examples.CombinedVertical : 'Loading'}
      />
      <Preview
        title="RTL"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <Preview
        title="Text type variants"
        preview={<Types />}
        code={examples ? examples.Types : 'Loading'}
      />
      <Preview
        title="Single Select variant"
        preview={<SingleSelect />}
        code={examples ? examples.SingleSelect : 'Loading'}
      />
      <Preview
        title="Multi Select variant"
        preview={<MultiSelect />}
        code={examples ? examples.MultiSelect : 'Loading'}
      />
      <Preview
        title="Single Select variant vertical orientation"
        preview={<SingleSelectVertical />}
        code={examples ? examples.SingleSelectVertical : 'Loading'}
      />
      <Preview
        title="Single Select variant RTL"
        preview={<SingleSelectRtl />}
        code={examples ? examples.SingleSelectRtl : 'Loading'}
      />
      <Preview
        title="Access Values by ref"
        preview={<AccessValues />}
        code={examples ? examples.AccessValues : 'Loading'}
      />
      <Preview
        title="Access Values (Select) by event listener"
        preview={<EventListenerSelect />}
        code={examples ? examples.EventListenerSelect : 'Loading'}
      />
      <PropsTable
        title="Props (Text types)"
        data={[
          {
            name: 'inputProps',
            type: 'object { input1: TextInputTypes, input2: TextInputTypes }',
            required: true,
            default: "object { inputSize: 'xlarge', type: 'text' }",
            description:
              'Props for the text input fields. See TextInput component',
          },
          {
            name: 'orientation',
            type: 'vertical | horizontal',
            required: false,
            default: 'horizontal',
            description: 'How the fields are positioned with one another',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Text direction',
          },
        ]}
      />

      <PropsTable
        title="Props (Select types)"
        data={[
          {
            name: 'selectProps',
            type: 'object { input1: SelectProps, input2: SelectProps }',
            required: true,
            default: 'object {}',
            description:
              'Props for the select fields. See Single Select and Multi Select components',
          },
          {
            name: 'orientation',
            type: 'vertical | horizontal',
            required: false,
            default: 'horizontal',
            description: 'How the fields are positioned with one another',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Text direction',
          },
        ]}
      />
    </>
  );
};

export default PageTextInputGroup;
