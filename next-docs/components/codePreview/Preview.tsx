import React, { useState } from 'react';
import classNames from '../../utils/classNames';
import PreviewSwitch from './Switch';

interface CodeProps {
  code: string;
}

const Code: React.FC<CodeProps> = ({ code }: CodeProps) => {
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
};

interface PreviewProps {
  title?: string;
  preview: React.ReactNode;
  code?: string;
}

export default function Preview({ title, preview, code }: PreviewProps) {
  const [isPreviewActive, setActive] = useState(true);
  const setPreviewActive = () => setActive(true);
  const setCodeActive = () => setActive(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl">{title}</h2>
        <PreviewSwitch
          isPreviewActive={isPreviewActive}
          setPreviewActive={setPreviewActive}
          setCodeActive={setCodeActive}
        />
      </div>
      <div
        className={classNames(
          isPreviewActive
            ? 'bg-white flex justify-center'
            : 'bg-black text-white overflow-x-scroll',
          'mt-4 overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6'
        )}
      >
        {isPreviewActive ? <>{preview}</> : <>{code && <Code code={code} />}</>}
      </div>
    </>
  );
}
