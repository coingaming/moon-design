import React, { createRef, useEffect, useState } from 'react';
import { Label } from '@heathmont/moon-core';
import { TextInputGroup } from '@heathmont/moon-select';

const Example = () => {
  const options1 = [
    {
      value: 'Estonia',
      label: 'Estonia',
    },
    {
      value: 'Latvia',
      label: 'Latvia',
    },
    {
      value: 'Lithuania',
      label: 'Lithuania',
    },
  ];

  const options2 = [
    {
      value: 'Car',
      label: 'Car',
    },
    {
      value: 'Bus',
      label: 'Bus',
    },
    {
      value: 'Train',
      label: 'Train',
    },
  ];

  var ref1 = createRef<HTMLInputElement>();
  var ref2 = createRef<HTMLInputElement>();

  const [country, setCountry] = useState('');
  const [vehicle, setVehicle] = useState('');

  useEffect(() => {
    console.log('Select references: ');
    console.log(ref1);
    console.log(ref2);
  }, [ref1, ref2]);

  const inputProps1 = {
    options: options1,
    size: 'large',
    placeholderSlot: 'Country',
    type: 'select',
    ref: ref1,
    onChange: (e: any) => {
      setCountry(e.value);
    },
  };

  const inputProps2 = {
    options: options2,
    size: 'large',
    type: 'select',
    placeholderSlot: 'Vehicle',
    ref: ref2,
    onChange: (e: any) => {
      setVehicle(e.value);
    },
  };

  return (
    <div className="flex flex-col gap-3 pb-24 ps-40 pe-40 w-full">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <div>
        <Label size="xsmall" backgroundColor="trunks.100">
          Country: {country}
        </Label>
      </div>
      <div>
        <Label size="xsmall" backgroundColor="trunks.100">
          Vehicle: {vehicle}
        </Label>
      </div>
    </div>
  );
};

export default Example;
