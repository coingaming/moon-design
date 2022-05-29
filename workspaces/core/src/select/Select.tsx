import React from "react";
import SelectProps from "./private/types/SelectProps";

const Select: React.FC<SelectProps> = ({
   children,
   options,
   label,
   value,
   placeholderSlot,
   placeholderValue,
   size = 'md',
   ...rest
}) => {
  const placeholder = placeholderSlot || placeholderValue || 'Choose an option';

  return (<div className='flex flex-col text-popo'>
    { !!label && (<div className='text-base mb-2'>{label}</div>) }

    <div className='flex relative py-2 px-3 bg-gohan rounded-lg border border-beerus border-solid cursor-pointer hover:border-[#d8d8d8] hover:outline hover:outline-1 hover:outline-[#d8d8d8]'>
      <input className='bg-gohan text-transparent z-[1]' value={value}/>

      <div className={`absolute cursor-pointer w-full z-[2] text-${ value ? 'popo' : 'trunks'}`}>
        { value ?? placeholder}
      </div>
    </div>
  </div>);
};

export default Select;

