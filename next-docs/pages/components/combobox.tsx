import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/combobox/Default';
import InsetMultiSelect from '../../public/examples/combobox/InsetMultiSelect';
import InsetSelect from '../../public/examples/combobox/InsetSelect';
import InsetSelectStates from '../../public/examples/combobox/InsetSelectStates';
import MultiSelect from '../../public/examples/combobox/MultiSelect';
import OptionsVariants from '../../public/examples/combobox/OptionsVariants';
import Select from '../../public/examples/combobox/Select';
import SelectStates from '../../public/examples/combobox/SelectStates';
import TriggerElements from '../../public/examples/combobox/TriggerElements';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('combobox');
  const { name, text, image } = getComponent('Combobox');
  return (
    <>
      <ComponentPageDescription  title={name} image={image} isRtlSupport isInDevelopment>
        <p>
          Comboboxes are the foundation of accessible autocompletes and command
          palettes for your app, complete with robust support for keyboard
          navigation. You are completely in charge of how you filter the
          results, whether it be with a fuzzy search library client-side or by
          making server-side requests to an API. In these examples we will keep
          the logic simple for demo purposes.
        </p>
        <p>
          {text}
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.Trigger>...</Combobox.Trigger>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
{/*
      <Preview
        title="Trigger elements"
        preview={<TriggerElements />}
        code={examples ? examples.TriggerElements : 'Loading'}
      />

      <Preview
        title="Example layouts for options"
        preview={<OptionsVariants />}
        code={examples ? examples.OptionsVariants : 'Loading'}
      />
  */}
    <ComponentAnatomy>
        {`<Combobox>
  <Combobox.Select>...</Combobox.Select>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="Select"
        preview={<Select />}
        code={examples ? examples.Select : 'Loading'}
      />

      <Preview
        title="Different states for Select"
        preview={<SelectStates />}
        code={examples ? examples.SelectStates : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.Select>
    <InsetInput />
    ...
  </Combobox.Select>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
        {/*`<Combobox>
  <Combobox.InsetSelect>...</Combobox.InsetSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`*/}
      </ComponentAnatomy>

      <Preview
        title="Select with inner label"
        preview={<InsetSelect />}
        code={examples ? examples.InsetSelect : 'Loading'}
      />

      <Preview
        title="Different states for Select with inner label"
        preview={<InsetSelectStates />}
        code={examples ? examples.InsetSelectStates : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.MultiSelect>...</Combobox.MultiSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="MultiSelect"
        preview={<MultiSelect />}
        code={examples ? examples.MultiSelect : 'Loading'}
      />

      <ComponentAnatomy>
      {`<Combobox>
  <Combobox.MultiSelect>
    <InsetInput />
    ...
  </Combobox.MultiSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
        {/*`<Combobox>
  <Combobox.InsetMultiSelect>...</Combobox.InsetMultiSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`*/}
      </ComponentAnatomy>

      <Preview
        title="MultiSelect with inner label"
        preview={<InsetMultiSelect />}
        code={examples ? examples.InsetMultiSelect : 'Loading'}
      />

    </>
  );
};

export default Example;
