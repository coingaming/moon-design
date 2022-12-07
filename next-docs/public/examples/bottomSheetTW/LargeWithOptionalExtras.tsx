import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';
import { TextInput } from '@heathmont/moon-core-tw';
import { MailEnvelope } from '@heathmont/moon-icons-tw';

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
      <Button onClick={openBottomSheet}>Show it to me!</Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet} size="lg" hasShadow>
        <BottomSheet.Backdrop />
        <BottomSheet.Panel>
          <BottomSheet.Draghandle>
            <BottomSheet.Title className="text-center">
              Forgot password?
            </BottomSheet.Title>
          </BottomSheet.Draghandle>
          <p className="p-2 text-trunks">
            If you change your password, you will be unable to withdraw for 48
            hours due to security reasons.
          </p>
          <div className="p-2">
            <TextInput label="Username or email" type="email" />
          </div>
          <div className="p-2">
            <Button
              onClick={closeBottomSheet}
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
        </BottomSheet.Panel>
      </BottomSheet>
    </>
  );
};

export default Example;
