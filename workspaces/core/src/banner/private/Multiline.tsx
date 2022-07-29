import React from 'react';

export interface Props {
  description: string;
  title?: string;
  iconHeader?: React.ReactElement;
  primaryButton?: React.ReactElement;
  secondaryButton?: React.ReactElement;
}

const Multiline: React.FC<Props> = ({
  description,
  title,
  iconHeader,
  secondaryButton,
  primaryButton,
}) => {
  return (
    <>
      {iconHeader && (
        <div className="w-full bg-goten flex rounded-lg justify-between">
          <div className="flex-col p-4">
            <div className="flex mb-2 justify-between">
              <h5 className="font-semibold">{title}</h5>
            </div>
            <p className="block align-middle items-center text-trunks">
              {description}
            </p>
          </div>
          <div className="flex justify-end items-baseline p-4">
            {iconHeader}
          </div>
        </div>
      )}
      {!iconHeader && (!!primaryButton || !!secondaryButton) && (
        <div className="w-full bg-goten sm:flex rounded-lg justify-between">
          <div className="flex-col p-6">
            <div className="flex mb-2 justify-between">
              <h5 className="font-semibold">{title}</h5>
            </div>
            <p className="block align-middle items-center text-trunks">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap justify-end mr-4 mb-4 sm:items-center sm:mr-8 sm:mb-0">
            {!!secondaryButton && (
              <span className="ml-2">{secondaryButton}</span>
            )}
            {!!primaryButton && <span className="ml-2">{primaryButton}</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default Multiline;
