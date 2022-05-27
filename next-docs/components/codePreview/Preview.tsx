import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-core';
import classNames from '../../utils/classNames';
import PreviewSwitch from './Switch';

interface CodeProps {
  code: string;
}

const Code: React.FC<CodeProps> = ({ code }: CodeProps) => (
  <pre>
    <code>{code}</code>
  </pre>
);

interface PreviewProps {
  title?: string;
  preview: React.ReactNode;
  code?: string;
  isGrayBg?: boolean;
}

const Preview = ({ title, preview, code, isGrayBg }: PreviewProps) => {
  const [isPreviewActive, setActive] = useState(true);
  const setPreviewActive = () => setActive(true);
  const setCodeActive = () => setActive(false);
  const copyCode = () => {
    if (navigator?.clipboard) navigator.clipboard.writeText(code ? code : '');
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Heading as="h2" size={24}>
          {title}
        </Heading>
        <PreviewSwitch
          isPreviewActive={isPreviewActive}
          setPreviewActive={setPreviewActive}
          setCodeActive={setCodeActive}
          copyCode={copyCode}
        />
      </div>
      <div
        className={classNames(
          isPreviewActive
            ? 'bg-white flex justify-center'
            : 'bg-black text-white overflow-x-scroll',
          'mt-4 overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6',
          isGrayBg ? 'bg-slate-200 text-gray-600' : ''
        )}
      >
        {isPreviewActive ? <>{preview}</> : <>{code && <Code code={code} />}</>}
      </div>
    </>
  );
};

export default Preview;
