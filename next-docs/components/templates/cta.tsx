import React, { ReactElement } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import { MailEnvelope } from '@heathmont/moon-icons-tw';

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  handleSignup: () => any;
  handleContact: () => any;
}

const CTA = ({ title, subtitle, handleSignup, handleContact }: Props) => {
  return (
    <div className="flex flex-col w-[95vw] p-4 sm:mt-0 sm:w-[100%] md:w-[80%] md:mx-auto lg:w-[672px] ">
      {title}
      {subtitle}
      <div className="flex flex-col gap-3 w-full sm:flex-row sm:justify-center sm:items-center sm:w-auto">
        <Button
          onClick={() => {
            if (handleSignup) handleSignup();
          }}
        >
          Sign up
        </Button>
        <Button
          variant="tertiary"
          iconLeft={<MailEnvelope className="text-moon-24" />}
          onClick={() => {
            if (handleContact) handleContact();
          }}
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default CTA;
