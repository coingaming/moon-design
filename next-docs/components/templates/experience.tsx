import React, {ReactElement} from "react";
import {Carousel} from "@heathmont/moon-components";
import ChevronLeft from "../../pages/templates/icons/ChevronLeft";
import ChevronRight from "../../pages/templates/icons/ChevronRight";
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
  carouselItems = [],
  carouselItemBackground = 'gohan'
}: Props) => {
  return (
    <div className="flex flex-col items-center relative max-w-[100vw] -top-[30px] mb-8 sm:top-0 sm:mb-0 sm:w-[600px] lg:w-[640px] lg:pr-6 xl:w-[930px] 2xl:w-[1230px]">
      {title}
      {subtitle}
      <div className="flex w-full items-center justify-center max-w-full px-5 sm:mt-12 lg:mt-[124px]">
        <Carousel
          step={1}
          scrollToLeftButton={({
            scrollToStep,
            disabled,
          }: {
            scrollToStep: any;
            disabled: boolean;
          }) =>
            disabled ? (
              <></>
            ) : (
              <div
                className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] -translate-y-[50%] -translate-x-[150%] rounded-full`}
                onClick={() => {
                  if (!disabled) scrollToStep();
                }}
              >
                <ChevronLeft fontSize="1.5rem" />
              </div>
            )
          }
          scrollToRightButton={({
            scrollToStep,
            disabled,
          }: {
            scrollToStep: any;
            disabled: boolean;
          }) =>
            disabled ? (
              <></>
            ) : (
              <div
                className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] right-0 -translate-y-[50%] translate-x-[150%] rounded-full`}
                onClick={() => {
                  if (!disabled) scrollToStep();
                }}
              >
                <ChevronRight fontSize="1.5rem" />
              </div>
            )
          }
          items={carouselItems?.map((item, index) => (
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
    </div>
  );
};

export default Experience;
