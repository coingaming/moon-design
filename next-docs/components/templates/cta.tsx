import React, {ReactElement} from "react";
import {Button} from "@heathmont/moon-core-tw";
import {MailEnvelope} from "@heathmont/moon-icons";

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  handleSignup: () => any;
  handleContact: () => any;
}

const CTA = ({
  title,
  subtitle,
  handleSignup,
  handleContact
}: Props) => {
  return (<div className="flex flex-col w-[95vw] sm:mt-0 sm:w-[100%] md:w-[80%] md:mx-auto lg:w-[672px] ">
    {title}
    {subtitle}
    <div className="flex flex-col w-full sm:flex-row sm:justify-center sm:items-center sm:w-auto">
      <Button
        variant="primary"
        className="w-full btn-primary p-[20px] text-moon-16 font-semibold rounded-moon-i-sm my-2 sm:self-start sm:w-[130px] sm:py-3 sm:px-5 sm:mx-4"
        onClick={() => { if (handleSignup) handleSignup() }}
      >Sign up</Button>
      <Button
        variant="primary"
        className="w-full flex font-semibold items-center relative ml-0 btn-tertiary p-[20px] gap-1 text-moon-16 rounded-moon-i-sm m-2 bg-[#FFFFFF14] sm:w-[150px] sm:p-0 sm:py-3 sm:px-5 sm:justify-between sm:self-start"
        icon="left"
        onClick={() => { if (handleContact) handleContact() }}
      >
        <div className="flex flex-row justify-center w-full sm:justify-between">
          <div className="absolute left-4 sm:static sm:left-0">
            <MailEnvelope width={24} height={24} />
          </div>
          <div>Contact us</div>
        </div>
      </Button>
    </div>
  </div>);
};

export default CTA;
