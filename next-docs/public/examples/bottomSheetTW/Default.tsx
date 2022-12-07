import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => {
    setIsOpen(false);
  };
  const openBottomSheet = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={openBottomSheet}>My mind is ready</Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel>
          <BottomSheet.Title>Do you wear skinny jeans?</BottomSheet.Title>
          <p className="p-4 text-trunks">
            I'm baby vaporware flexitarian scenester lyft activated charcoal
            tacos. Hashtag etsy literally irony yr 3 wolf moon PBR&B cred banjo
            lyft air plant edison bulb. Salvia next level pitchfork
            single-origin coffee adaptogen. Neutra tilde sartorial Brooklyn
            shaman schlitz. Roof party irony tattooed bicycle rights. Ethical
            you probably haven't heard of them literally bespoke PBR&B. Tattooed
            artisan twee, kinfolk kale chips taxidermy austin kitsch
            williamsburg tousled ugh.
          </p>
          <div className="p-4">
            <Button onClick={closeBottomSheet} size="lg" fullWidth>
              I'm honestly done
            </Button>
          </div>
        </BottomSheet.Panel>
      </BottomSheet>
    </>
  );
};

export default Example;
