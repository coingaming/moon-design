import React, { createRef, useEffect, useState } from 'react';
import { TextInputGroup, Label } from '@heathmont/moon-core';

const Example = () => {
  var ref1 = createRef<HTMLInputElement>();
  var ref2 = createRef<HTMLInputElement>();

  const [country, setCountry] = useState('Estonia');
  const [phone, setPhone] = useState('+372 45678901');

  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Country',
    ref: ref1,
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Phone',
    ref: ref2,
  };

  useEffect(() => {
    const input1 = ref1?.current;
    const input2 = ref2?.current;

    if (input1) {
      input1.value = country;
      input1.onchange = (e: any) => {
        setCountry(e.currentTarget.value);
      };
    }

    if (input2) {
      input2.value = phone;
      input2.onchange = (e: any) => {
        setPhone(e.currentTarget.value);
      };
    }
  }, [ref1, ref2]);

  return (
    <div className="flex flex-col gap-3">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <div>
        <Label size="medium" backgroundColor="trunks.100">
          Country: {country}
        </Label>
      </div>
      <div>
        <Label size="medium" backgroundColor="trunks.100">
          Phone: {phone}
        </Label>
      </div>
    </div>
  );
};

export default Example;
