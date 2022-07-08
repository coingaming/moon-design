import React, {ReactElement} from "react";
import {Button} from "@heathmont/moon-core-tw";
import {ArrowsLeft} from "@heathmont/moon-icons";

interface Props {
  logo: ReactElement;
  isScrolled?: boolean;
  height?: number;
}

const Header = ({
  isScrolled,
  height,
  logo
}: Props) => {
  return (<div className={`flex items-center align-center justify-between fixed top-0 left-0 w-full py-4 px-6 z-10 transition-all duration-500 ${isScrolled ? 'bg-goku ' : 'bg-transparent'}`}>
    <div className={`flex items-center relative left-0 h-[${height}px] ml-1`}>
      <ArrowsLeft fontSize="2rem" />
      <span className="fixed left-[50%] -translate-x-[50%] sm:translate-x-[0%] sm:static sm:left-0 sm:ml-6">
        {logo}
      </span>
    </div>
    <div className="hidden sm:flex flex-row">
      <Button
        variant="ghost"
        width={82}
        height={40}
        style={{ marginRight: '5px', color: 'white' }}
      >
        Log in
      </Button>
      <Button width={82} height={40}>
        Sing up
      </Button>
    </div>
  </div>);
};

export default Header;
