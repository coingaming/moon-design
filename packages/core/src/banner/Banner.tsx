import React from 'react';
import Multiline from './private/Multiline';
import MultilineMobile from './private/MultilineMobile';
export interface BannerProps {
  title: string;
  description: string;
  iconHeader?: React.ReactElement;
  isMultiline?: boolean;
  buttons?: React.ReactElement[];
  isMobile?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  iconHeader,
  buttons,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <MultilineMobile
        title={title}
        description={description}
        iconHeader={iconHeader}
        buttons={buttons}
      />
    );
  }
  return (
    <Multiline
      title={title}
      description={description}
      iconHeader={iconHeader}
      buttons={buttons}
    />
  );
};

export default Banner;
