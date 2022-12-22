import React, { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  headline: ReactElement;
  subtitle: ReactElement;
  button: ReactElement;
  heroImage: ReactElement;
  wrapperClasses?: string;
  bottomGradient?: string;
}

const Hero = ({
  headline,
  subtitle,
  button,
  wrapperClasses,
  heroImage,
  bottomGradient,
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center relative h-[600px] bg-bottom pt-[72px] bg-[#24033F] ${
        wrapperClasses ? wrapperClasses : ''
      } sm:flex-row-reverse sm:items-stretch sm:h-[918px] sm:mb-0`}
      style={{ backgroundSize: 'auto 100%' }}
    >
      <div className="flex sm:items-center sm:relative sm:-left-[200px] sm:h-full sm:pt-[120px] xl:-left-[50px]">
        <div className="flex justify-end self-end relative w-full h-full">
          <div className="flex items-end justify-end max-w-[700px] h-full sm:min-w-[500px] md:ml-15 xxl:min-w-[600px]">
            {heroImage}
          </div>
          <div
            className="absolute left-0 bottom-0 w-full h-[150px] sm:hidden"
            style={{
              background: bottomGradient ?? '',
            }}
          />
        </div>
      </div>
      <div className="text-goten rounded-b-2xl p-5 bg-[#24033F] flex flex-col items-center absolute -bottom-48 -mb-10 z-1 sm:p-0 sm:bg-transparent sm:w-[450px] sm:min-w-[450px] sm:relative sm:top-[209px] sm:bottom-0 sm:mb-0 sm:pb-24 sm:items-start sm:ml-[380px] lg:ml-[160px] xl:w-[576px] xl:ml-[232px]">
        {headline}
        {subtitle}
        {button}
      </div>
      <div
        className="hidden absolute left-0 bottom-0 w-full h-1/4 sm:block"
        style={{ background: bottomGradient ?? '' }}
      />
    </div>
  );
};

export default Hero;
