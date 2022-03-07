import React from 'react';
import Multiline from './private/Multiline';
import MultilineMobile from './private/MultilineMobile';
import Singleline from './private/SingleLine';
export interface BannerProps {
  title: string;
  description: string;
  iconHeader?: React.ReactElement;
  isMultiline?: boolean;
  buttons?: React.ReactElement[];
  isMobile?: boolean;
  link?: React.ReactElement;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  iconHeader,
  buttons,
  isMultiline = true,
  isMobile,
  link,
}) => {
  if (!isMultiline) {
    return <Singleline description={description} link={link} />;
  }
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
