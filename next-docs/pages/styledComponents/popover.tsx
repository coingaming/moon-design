import React from 'react';
import Preview from '../../components/codePreview/Preview';
import CodeSnippet from '../../components/codePreview/CodeSnippet';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/styledExamples/popover/Default';
import useExamples from '../../utils/useExamples';

const PagePopover = () => {
  const examples = useExamples('popover', 'styled');
  return (
    <>
      <ComponentPageDescription title="Popover" isDeprecated>
        <DeprecationWarning href="/components/popover" name="Popover" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'content',
            type: 'React.ReactNode',
            required: true,
            default: '-',
            description: `Content of popover.`,
          },
          {
            name: 'defaultState',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `Open/Closed popover by default.`,
          },
          {
            name: 'closeOnClickOutside',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Close popover if clicked outside.',
          },
          {
            name: 'placement',
            type: 'Placement',
            required: false,
            default: '-',
            description: 'Placement of popover.',
          },
          {
            name: 'minWidth',
            type: 'number',
            required: false,
            default: '300',
            description: 'min-width value of popover (px)',
          },
          {
            name: 'maxWidth',
            type: 'number',
            required: false,
            default: '600',
            description: 'max-width value of popover (px)',
          },
        ]}
      />
      <CodeSnippet>
        {`type Placement = 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'auto'
| 'auto-start'
| 'auto-end';
`}
      </CodeSnippet>
    </>
  );
};

export default PagePopover;
