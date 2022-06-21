import React from 'react';
import Multiline from './private/Multiline';
import Singleline from './private/Singleline';
export interface BannerProps {
  description: string;
  title?: string;
  iconHeader?: React.ReactElement;
  isMultiline?: boolean;
  buttons?: React.ReactElement[];
  link?: React.ReactElement;
}

const Banner: React.FC<BannerProps> = ({
  description,
  title,
  iconHeader,
  buttons,
  isMultiline = true,
  link,
}) => {
  if(!isMultiline) {
    return <Singleline description={description} link={link ?? <></>} />;
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
