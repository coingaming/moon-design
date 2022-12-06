import { useState } from 'react';
import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => {
  const [gender, setGender] = useState('option1');
  const handleChange = (event: React.UIEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setGender(target.value);
  };
  return (
    <>
      <RadioButton
        name="option"
        id="option1"
        value="option1"
        label="Option 1"
        ariaLabel="Option 1"
        checked={gender === 'option1'}
        onChange={handleChange}
      />
      <RadioButton
        name="option"
        id="option2"
        value="option2"
        label="Option 2"
        ariaLabel="Option 2"
        checked={gender === 'option2'}
        onChange={handleChange}
      />
      <RadioButton
        name="option"
        id="option3"
        value="option3"
        label="Option 3"
        ariaLabel="Option 3"
        checked={gender === 'option3'}
        onChange={handleChange}
      />
    </>
  );
};

export default Example;
