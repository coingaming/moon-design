import React, { useState } from 'react';
import { Bottomsheet, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomsheet = () => {
    setIsOpen(false);
  };
  const openBottomsheet = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={openBottomsheet}>My mind is ready</Button>
      <Bottomsheet open={isOpen} onClose={closeBottomsheet}>
        <Bottomsheet.Panel>
          <Bottomsheet.Title>Do you wear skinny jeans?</Bottomsheet.Title>
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
            <Button onClick={closeBottomsheet} size="lg" fullWidth>
              I'm honestly done
            </Button>
          </div>
        </Bottomsheet.Panel>
      </Bottomsheet>
    </>
  );
};

export default Example;
