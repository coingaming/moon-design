import React, { useState } from 'react';
import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => {
  const [gender, setGender] = useState('male');
  const handleChange = (event: React.UIEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setGender(target.value);
  };

  return (
    <div className="flex flex-col gap-2 pl-4">
      <p>Gender:</p>
      <RadioButton
        id="male"
        value="male"
        label="Male"
        ariaLabel="Male"
        checked={gender === 'male'}
        onChange={handleChange}
      />
      <RadioButton
        id="female"
        value="female"
        label="Female"
        ariaLabel="Female"
        checked={gender === 'female'}
        onChange={handleChange}
      />
      <RadioButton
        id="other"
        value="other"
        label="Other"
        ariaLabel="Other"
        checked={gender === 'other'}
        onChange={handleChange}
      />
    </div>
  );
};

export default Example;
