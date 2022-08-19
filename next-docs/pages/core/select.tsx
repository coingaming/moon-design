import React, { useState } from 'react';
import { Select } from '@heathmont/moon-core-tw';
// import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import useExamples from '../../utils/useExamples';

const options = [
  { label: 'English', value: 'en', flag: '🇬🇧' },
  { label: 'Japanese', value: 'ja', flag: '🇯🇵' },
  { label: 'Russian', value: 'ru', flag: '🇷🇺' },
  { label: 'Portuguese', value: 'pt', flag: '🇧🇷' },
  { label: 'Chinese', value: 'zh', flag: '🇨🇳' },
  { label: 'Spanish', value: 'es', flag: '🇪🇸' },
  { label: 'Korean', value: 'ko', flag: '🇰🇷' },
  { label: 'Thai', value: 'th', flag: '🇹🇭' },
  { label: 'German', value: 'de', flag: '🇩🇪' },
  { label: 'Turkish', value: 'tr', flag: '🇹🇷' },
  { label: 'Estonian', value: 'et', flag: '🇪🇪' },
  { label: 'Swedish', value: 'sv', flag: '🇸🇪' },
  { label: 'French', value: 'fr', flag: '🇫🇷' },
  { label: 'Finnish', value: 'fi', flag: '🇫🇮' },
  { label: 'Vietnamese', value: 'vi', flag: '🇻🇳' },
  { label: 'Not set', value: 'default', flag: '🏳️' },
];

const options2 = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

const Example = () => {
  const examples = useExamples('accordionTW');

  return (
    <>
      <ComponentPageDescription title="Select">
        <p>
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p>
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that's in the space.
        </p>
      </ComponentPageDescription>
      <div className="p-4 flex bg-goku text-moon-14 rounded-moon-s-sm preview theme-moon-light">
        <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
          <div className="w-40">
            <Select
              options={options}
              label="Input label text"
              placeholder="Choose"
              isError
            />
          </div>
          <div className="w-96">
            <Select
              label="Input label text"
              size="lg"
              placeholder="Choose"
              disabled
            />
          </div>
          <div className="w-96">
            <Select
              options={options2}
              label="Input label text"
              size="xl"
              placeholder="Choose"
              hintText="Informative message holder"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
