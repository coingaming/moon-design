import { useState } from 'react';
import { Select } from '@heathmont/moon-core-tw';

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

const Example = () => {
  const [option, setOption] = useState(options[0]);
  const [option2, setOption2] = useState(options[0]);
  const [option3, setOption3] = useState(options[0]);
  const [option4, setOption4] = useState(options[0]);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Select
        size="sm"
        options={options}
        label="Country"
        placeholder="Select your country"
        value={option}
        onChange={setOption as () => {}}
        formatOptionLabel={(data: any) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
      <Select
        options={options}
        label="Country"
        placeholder="Select your country"
        value={option2}
        onChange={setOption2 as () => {}}
        formatOptionLabel={(data: any) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
      <Select
        size="lg"
        options={options}
        label="Country"
        placeholder="Select your country"
        value={option3}
        onChange={setOption3 as () => {}}
        formatOptionLabel={(data: any) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
      <Select
        size="xl"
        options={options}
        label="Country"
        placeholder="Select your country"
        value={option4}
        onChange={setOption4 as () => {}}
        formatOptionLabel={(data: any) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
    </div>
  );
};

export default Example;
