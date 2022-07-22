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
  return (<div className="flex flex-col items-center w-full mt-[96px] mb-[96px] sm:flex-wrap sm:justify-center sm:flex-row-reverse sm:top-0 md:w-[80%] md:justify-center md:flex-nowrap md:my-[246px] xl:w-full ">
      <div className="flex flex-col self-stretch items-center pb-8 sm:justify-center sm:ps-12 sm:w-full md:w-[full] lg:w-[510px] xl:pl-0">
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
