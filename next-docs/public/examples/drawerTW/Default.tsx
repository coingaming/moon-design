import { Drawer } from '@heathmont/moon-core-tw';
import React from 'react';


const Example = () => {
  return (
    <div className="flex justify-around items-center w-[848px] h-[556px]">
      <Drawer
        title={'Title of the drawer'}
        content={
          <>
            <div className="flex">
              <div className="w-[152px] h-[64px] rounded-[4px] gap-[10px] px-6 bg-slate-300 mt-4 ml-6 mb-2 mr-1">
                <p className="h-[64px] left-6 text-[16px] leading-6 items-center justify-center text-[#4E46B4] mx-6 my-4">
                  Content
                </p>
              </div>
              <div className="w-[152px] h-[64px] items-center text-center rounded-[4px] gap-[10px] px-6 bg-slate-300 mt-4  ">
                <p className="h-[64px] left-6 text-[16px] leading-6 items-center text-[#4E46B4] mx-6 my-4 ">
                  Content
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[152px] h-[64px] rounded-[4px] gap-[10px] px-6 bg-slate-300 ml-6 mb-2 mr-1">
                <p className="h-[64px] left-6 text-[16px] leading-6 items-center justify-center text-[#4E46B4] mx-6 my-4">
                  Content
                </p>
              </div>
              <div className="w-[152px] h-[64px] items-center text-center rounded-[4px] gap-[10px] px-6 bg-slate-300 ">
                <p className="h-[64px] left-6 text-[16px] leading-6 items-center text-[#4E46B4] mx-6 my-4 ">
                  Content
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default Example;
