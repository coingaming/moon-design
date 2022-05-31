import React, { useState } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';

export default function PageAccordion() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      <section className="mt-8 text-3xl font-medium">Checkbox</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            label="I agree to receive bonus & marketing emails."
            id="checkbox1"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Checked</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            onChange={() => {
              console.log('isChecked:', isChecked);
            }}
            label="I agree to receive bonus & marketing emails."
            id="checkbox2"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">NoLabel</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox id="checkbox3" />
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Disabled</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            disabled
            label="I agree to receive bonus & marketing emails."
            id="checkbox4"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">ReadOnly</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox readOnly={true} label="Readonly checkbox." id="checkbox4" />
        </div>
      </div>
    </div>
  );
}
