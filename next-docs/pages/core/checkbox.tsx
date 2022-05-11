import React, { useState } from 'react';
import { Checkbox } from '@moon/core';

export default function PageAccordion() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="theme-moon-dark">
      <section className="mt-8 text-3xl font-bold">Checkbox</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            label="I agree to receive bonus & marketing emails."
            id="checkbox1"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Checked</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            label="I agree to receive bonus & marketing emails."
            id="checkbox2"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">NoLabel</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox id="checkbox3" />
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Disabled</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox
            disabled
            label="I agree to receive bonus & marketing emails."
            id="checkbox4"
          />
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">ReadOnly</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-center w-full">
          <Checkbox readOnly={true} label="Readonly checkbox." id="checkbox4" />
        </div>
      </div>
    </div>
  );
}
