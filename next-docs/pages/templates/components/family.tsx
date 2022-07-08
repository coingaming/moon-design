import React, {ReactElement} from "react";

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  image: string;
}

const Family = ({
  title,
  subtitle,
  image
}: Props) => {
  return (<div className="flex flex-col items-center w-[100%] mt-[96px] mb-[96px] sm:flex-wrap sm:justify-center sm:flex-row-reverse sm:top-0 md:justify-center md:flex-nowrap  md:my-[246px]">
      <div className="flex flex-col self-stretch items-center pb-8 sm:justify-center sm:ps-12 sm:w-[100%] lg:w-[100%] xl:w-[600px] xl:pl-0">
        {title}
        {subtitle}
      </div>
      <div
        className="bg-contain bg-center bg-no-repeat w-[340px] h-[238px] max-w-[100vw] sm:w-[482px] sm:h-[384px] xl:mr-[144px]"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>)
};

export default Family;
