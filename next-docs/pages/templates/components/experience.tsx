import React, {ReactElement} from "react";
import {Carousel} from "@heathmont/moon-components";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import ExperienceCarouselItem from "./experience-carousel-item";

export interface ExperienceCarousel {
  index?: number;
  title: string;
  points: string[];
  icon: any;
}

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  carouselItems: ExperienceCarousel[];
  carouselItemBackground?: string;
}

const Experience = ({
  title,
  subtitle,
  carouselItems,
  carouselItemBackground = 'gohan'
}: Props) => {
  return (<div className="flex flex-col items-center relative -top-[30px] w-full mb-8 sm:top-0 sm:mb-0 md:w-[930px] xl:w-[1232px]">
    {title}
    {subtitle}
    <div className="flex w-full items-center justify-center max-w-[100vw] px-5 pt-8 sm:max-w-[80vw] sm:mt-12 lg:w-full lg:max-w-[80vw] lg:mt-[124px] xl:min-w-[1226px]">
      <Carousel
        step={1}
        scrollToLeftButton={({ scrollToStep, disabled }: { scrollToStep: any; disabled: boolean; }) =>
          disabled ? (<></>) : (<div
            className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] -translate-y-[50%] -translate-x-[150%] rounded-full`}
            onClick={() => {
              if (!disabled) scrollToStep();
            }}
          ><ChevronLeft fontSize="1.5rem" /></div>)
        }
        scrollToRightButton={({ scrollToStep, disabled }: { scrollToStep: any; disabled: boolean; }) =>
          disabled ? (<></>) : (<div
            className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] right-0 -translate-y-[50%] translate-x-[150%] rounded-full`}
            onClick={() => {
              if (!disabled) scrollToStep();
            }}
          ><ChevronRight fontSize="1.5rem" /></div>)
        }
        items={carouselItems.map((item, index) => (
          <ExperienceCarouselItem
            key={item.title + '-wrapper'}
            title={item.title}
            points={item.points}
            icon={item.icon}
            index={index}
            backgroundColor={carouselItemBackground}
          />
        ))}
      />
    </div>
  </div>);
};

export default Experience;
