import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import AsLink from '../../public/examples/menuItemTW/AsLink';
import Checkbox from '../../public/examples/menuItemTW/Checkbox';
import Default from '../../public/examples/menuItemTW/Default';
import ExpandCollapse from '../../public/examples/menuItemTW/ExpandCollapse';
import MultiLine from '../../public/examples/menuItemTW/MultiLine';
import MultiTitle from '../../public/examples/menuItemTW/MultiTitle';
import Radio from '../../public/examples/menuItemTW/Radio';
import WithIcon from '../../public/examples/menuItemTW/WithIcon';
import WithMeta from '../../public/examples/menuItemTW/WithMeta';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('menuItemTW');
  return (
    <>
      <ComponentPageDescription title="MenuItem">
        <p>
          Menu items are used in such vertical menues and containers as
          Popovers, Sidebars, Drawers, Dialogs etc.
        </p>
        <p>
          Menu item row heights can vary based on the amount of content in each
          row. The content in each row is flexible. By default, each menu item
          row height is Medium(md) 40px for one line of content.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="AsLink"
        preview={<AsLink />}
        code={examples ? examples.AsLink : 'Loading'}
      />
      <Preview
        title="With icon"
        preview={<WithIcon />}
        code={examples ? examples.WithIcon : 'Loading'}
      />
      <Preview
        title="With meta"
        preview={<WithMeta />}
        code={examples ? examples.WithMeta : 'Loading'}
      />
      <Preview
        title="Checkbox"
        preview={<Checkbox />}
        code={examples ? examples.Checkbox : 'Loading'}
      />
      <Preview
        title="Radio"
        preview={<Radio />}
        code={examples ? examples.Radio : 'Loading'}
      />
      <Preview
        title="MultiTitle"
        preview={<MultiTitle />}
        code={examples ? examples.MultiTitle : 'Loading'}
      />
      <Preview
        title="Multi Line Items"
        preview={<MultiLine />}
        code={examples ? examples.MultiLine : 'Loading'}
      />
      <Preview
        title="Expand collapse"
        preview={<ExpandCollapse />}
        code={examples ? examples.ExpandCollapse : 'Loading'}
      />
      <PropsTable
        title="MenuItem props"
        data={[
          {
            name: 'as',
            type: 'a | button',
            required: false,
            default: 'button',
            description: 'Rendered HTML element',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Is MenuItem checked/unchecked. For radio and checkbox variant.',
          },
        ]}
      />
    </>
  );
};

export default Example;
