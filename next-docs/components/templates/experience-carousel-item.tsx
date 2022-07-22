import React from "react";
import Image from "next/image";
import {ExperienceCarousel} from "./experience";

const ExperienceCarouselItem = ({
  index,
  title,
  icon,
  points,
  backgroundColor
}: ExperienceCarousel & { backgroundColor?: string }) => {
  return (<div className={`w-[276px] h-full ${ backgroundColor ? `bg-${backgroundColor}` : 'bg-gohan' } rounded-lg flex flex-col p-4 sm:my-8 sm:h-auto ${index && index % 2 ? 'sm:mt-[40%]' : ''}`}>
    <div className="flex items-center justify-center pt-3 pb-4">
      <Image src={icon} alt={title} />
    </div>
    <p className="text-moon-18 text-center font-semibold mb-4 w-full">
      {title}
    </p>
    <ul className="w-full list-disc ps-4">
      {points?.map((point: string, index) => (
        <li key={point + index}>
          <p className="text-moon-16 w-full">{point}</p>
        </li>
      ))}
    </ul>
  </div>);
};

export default ExperienceCarouselItem;
