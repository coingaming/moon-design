import { useState } from 'react';
import classNames from '../../utils/classNames';
import CodeSnippet from '../CodeSnippet';
import PreviewSwitch from './PreviewSwitch';

type Props = {
  title?: string;
  preview: React.ReactNode;
  code?: string;
};

const Preview = ({ title, preview, code }: Props) => {
  const [isPreviewActive, setActive] = useState(true);
  const setPreviewActive = () => setActive(true);
  const setCodeActive = () => setActive(false);
  const copyCode = () => {
    if (navigator?.clipboard) navigator.clipboard.writeText(code ? code : '');
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-moon-24 font-medium">{title}</h2>
        <PreviewSwitch
          isPreviewActive={isPreviewActive}
          setPreviewActive={setPreviewActive}
          setCodeActive={setCodeActive}
          copyCode={copyCode}
        />
      </div>
      <div
        className={classNames(
          isPreviewActive ? 'theme-moon-light p-4' : 'theme-moon-dark',
          'flex bg-goku text-moon-14 rounded-moon-s-sm'
        )}
      >
        {isPreviewActive ? (
          <>{preview}</>
        ) : (
          <>{code && <CodeSnippet>{code}</CodeSnippet>}</>
        )}
      </div>
    </div>
  );
};

export default Preview;
