import React, { ReactElement } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import { ArrowsLeft } from '@heathmont/moon-icons';

interface Props {
  logo?: ReactElement;
  isScrolled?: boolean;
  height?: number;
}

const Header = ({ isScrolled, height, logo }: Props) => {
  return (
    <div
      className={`flex items-center align-center justify-between fixed top-0 left-0 w-full py-4 pr-6 pl-4 z-10 transition-all duration-500 ${
        isScrolled ? 'bg-goku ' : 'bg-transparent'
      }`}
    >
      <div className={`flex items-center relative left-0 h-[${height}px] ml-0`}>
        {!!logo && (
          <div className="sm:hidden">
            <ArrowsLeft fontSize="2rem" className="sm:hidden" />
            <span className="fixed top-4 left-[50%] -translate-x-[50%]">
              {logo}
            </span>
          </div>
        )}
      </div>
      <div className="hidden sm:flex flex-row gap-2">
        <Button variant="ghost">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
