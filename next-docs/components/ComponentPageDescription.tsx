import { Label } from '@heathmont/moon-core-tw';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  image?: StaticImageData;
  isAriaSupport?: boolean;
  isRtlSupport?: boolean;
  isInProgress?: boolean;
  isDeprecated?: boolean;
  children: React.ReactNode;
};

const ComponentPageDescription: React.FC<Props> = ({
  title,
  image,
  isAriaSupport,
  isRtlSupport,
  isInProgress,
  isDeprecated,
  children,
}) => {
  const isLabelsVisible =
    isDeprecated || isInProgress || isAriaSupport || isRtlSupport;
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-12 lg:basis-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-moon-32 font-medium">{title}</h1>
          {isLabelsVisible && (
            <div className="flex items-start gap-2">
              {isDeprecated && (
                <Label size="2xs" bgColor="bg-chiChi-60" color="text-popo">
                  Deprecated
                </Label>
              )}
              {isInProgress && (
                <Label size="2xs" bgColor="bg-krillin-60" color="text-popo">
                  In progress
                </Label>
              )}
              {isAriaSupport && (
                <Label size="2xs" bgColor="bg-nappa" color="text-goten">
                  ARIA
                </Label>
              )}
              {isRtlSupport && (
                <Label size="2xs" bgColor="bg-whis" color="text-goten">
                  RTL
                </Label>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 text-moon-16">
          {children}
        </div>
      </div>
      {image && (
        <div className="flex lg:basis-1/2 items-center justify-center h-80 rounded-moon-s-md overflow-hidden">
          <Image src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ComponentPageDescription;
