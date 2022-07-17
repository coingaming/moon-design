import { Drawer, Button } from '@heathmont/moon-core-tw';
import React from 'react';

const Example = () => {
  return (
    <div className="flex justify-around items-center w-[848px] h-[556px]">
      <Drawer
        title={'Title of the drawer'}
        width={45}
        content={(<>
          <div className="flex flex-wrap items-center justify-between gap-2">
            {[1, 2, 3, 4].map((item) => (<div className="min-w-[125px] h-[64px] grow flex items-center justify-center rounded-sm px-6 bg-slate-300">
              <p className="text-moon-16 leading-6 text-piccolo">
                {`Content #${item}`}
              </p>
            </div>))}
          </div>
        </>)}
        primaryButton={(<Button
          variant='primary'
          onClick={() => console.log('Button one clicked')}
        >Primary</Button>)}
        secondaryButton={(<Button
          variant='tertiary'
          onClick={() => console.log('Button two clicked')}
        >Secondary</Button>)}
        tertiaryButton={(<Button
          variant='ghost'
          onClick={() => console.log('Button three clicked')}
        >Tertiary</Button>)}
      />
    </div>
  );
}

export default Example;
