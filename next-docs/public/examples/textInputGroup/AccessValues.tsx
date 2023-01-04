import { createRef, useEffect, useState } from 'react';
import { TextInputGroup, Tag } from '@heathmont/moon-core-tw';

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
    <div className="flex flex-col justify-around items-center w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <Tag size="xsmall" backgroundColor="bg-trunks">
        Country: {country}
      </Tag>
      <Tag size="xsmall" backgroundColor="bg-trunks">
        Phone: {phone}
      </Tag>
    </div>
  );
};

export default Example;
