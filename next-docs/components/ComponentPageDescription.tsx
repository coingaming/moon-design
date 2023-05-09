import { Tag } from '@heathmont/moon-core-tw';
import Image from 'next/image';

type Props = {
  title?: string;
  image?: string;
  isAriaSupport?: boolean;
  isRtlSupport?: boolean;
  isInProgress?: boolean;
  isInDevelopment?: boolean;
  isDeprecated?: boolean;
  children: React.ReactNode;
};

const ComponentPageDescription: React.FC<Props> = ({
  title,
  image,
  isAriaSupport,
  isRtlSupport,
  isInProgress,
  isInDevelopment,
  isDeprecated,
  children,
}) => {
  const isLabelsVisible =
    isDeprecated || isInProgress || isAriaSupport || isRtlSupport;
  return (
    <div className="flex flex-col gap-4 lg:flex-row items-start">
      <div className="flex flex-col gap-12 lg:basis-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-moon-32">{title}</h1>
          {isLabelsVisible && (
            <div className="flex items-start gap-2">
              {isDeprecated && (
                <Tag size="2xs" className="bg-chichi text-popo">
                  Deprecated
                </Tag>
              )}
              {isInProgress && (
                <Tag size="2xs" className="bg-krillin text-popo">
                  In progress
                </Tag>
              )}
              {isInDevelopment && (
                <Tag size="2xs" className="bg-chichi text-popo">
                  In Development - Do not use in production
                </Tag>
              )}
              {isAriaSupport && (
                <Tag size="2xs" className="bg-nappa text-goten">
                  ARIA
                </Tag>
              )}
              {isRtlSupport && (
                <Tag size="2xs" className="bg-whis text-goten">
                  RTL
                </Tag>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 text-moon-16">
          {children}
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt={title as string}
          width={408}
          height={224}
          className="flex md:basis-1/2"
        />
      )}
    </div>
  );
};

export default ComponentPageDescription;
