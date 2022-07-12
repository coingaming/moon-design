import React from 'react';
import Multiline from './private/Multiline';
import Singleline from './private/Singleline';

export interface BannerProps {
  description: string;
  title?: string;
  iconHeader?: React.ReactElement;
  isSingleline?: boolean;
  primaryButton?: React.ReactElement;
  secondaryButton?: React.ReactElement;
  link?: React.ReactElement;
}

const Banner: React.FC<BannerProps> = ({
  description,
  title,
  iconHeader,
  secondaryButton,
  primaryButton,
  isSingleline = false,
  link  ,
}) => {
  if (isSingleline) return (<Singleline description={description} link={link ?? <></>} />);

  return (
    <Multiline
      title={title}
      description={description}
      iconHeader={iconHeader}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
    />
  );
};

export default Banner;
