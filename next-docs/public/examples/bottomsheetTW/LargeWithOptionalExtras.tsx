import React, { useState } from 'react';
import { Bottomsheet, Button } from '@heathmont/moon-core-tw';
import { TextInput } from '@heathmont/moon-core-tw';
import { MailEnvelope } from '@heathmont/moon-icons-tw';

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
      <Button onClick={openBottomsheet}>Show it to me!</Button>
      <Bottomsheet
        open={isOpen}
        onClose={closeBottomsheet}
        size="lg"
        hasDragHandle
        hasShadow
      >
        <Bottomsheet.Backdrop />
        <Bottomsheet.Panel>
          <Bottomsheet.Title className="text-center">
            Forgot password?
          </Bottomsheet.Title>
          <p className="p-2 text-trunks">
            If you change your password, you will be unable to withdraw for 48
            hours due to security reasons.
          </p>
          <div className="p-2">
            <TextInput label="Username or email" type="email" />
          </div>
          <div className="p-2">
            <Button
              onClick={closeBottomsheet}
              variant="tertiary"
              size="lg"
              fullWidth
            >
              Send
            </Button>
            <div className="p-2 mt-4 rounded-lg bg-goku">
              <h3 className="p-2 text-lg font-medium leading-6 border-b-2 text-bulma border-beerus">
                Need some help?
              </h3>
              <div className="flex mt-2">
                <MailEnvelope className="text-moon-48 text-bulma" />
                <div className="px-2">
                  <p className="font-semibold text-bulma">Email us</p>
                  <p className="text-xs text-trunks">Contact us via email</p>
                </div>
              </div>
            </div>
          </div>
        </Bottomsheet.Panel>
      </Bottomsheet>
    </>
  );
};

export default Example;
