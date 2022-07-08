import React, {ReactElement} from "react";
import Image, {StaticImageData} from "next/image";

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
  return (<div
    className={`flex flex-col justify-center items-center relative h-[600px] bg-bottom ${ wrapperClasses ? wrapperClasses : ''} sm:flex-row-reverse sm:items-stretch sm:h-[800px] sm:mb-0`}
    style={{ backgroundSize: 'auto 100%' }}
  >
    <div className="flex sm:items-center sm:relative sm:-left-[50px] sm:h-[679px] sm:mt-[120px]">
      <div className="flex justify-end self-end relative w-full h-full">
        <div className="flex items-end justify-end max-w-[900px] h-full sm:min-w-[500px] md:ml-15 lg:min-w-[600px]">
          {heroImage}
        </div>
        <div
          className="absolute left-0 bottom-0 w-full h-[150px] sm:hidden"
          style={{
            background: bottomGradient ?? ''
          }}
        />
      </div>
    </div>
    <div className="flex flex-col absolute top-[60%] -bottom-48 px-8 -mb-10 z-1 sm:relative sm:top-0 sm:bottom-0 sm:mb-0 sm:pb-24 sm:pt-[72px] sm:w-[50%] sm:items-center md:w-[65%]">
      <div className="flex flex-col items-center bottom-4 max-w-full sm:items-start sm:mt-[244px] sm:w-[720px] sm:ml-[248px]">
        {headline}
        {subtitle}
        {button}
      </div>
    </div>
    <div
      className="hidden absolute left-0 bottom-0 w-full h-[150px] sm:block"
      style={{background: bottomGradient ?? ''}}
    />
  </div>)
};

export default Hero;
