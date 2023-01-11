import { useState } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import CodeSnippet from '../CodeSnippet';
import PreviewSwitch from './PreviewSwitch';

type Props = {
  title?: string;
  preview: React.ReactNode;
  code?: string;
  description?: string;
  className?: string;
};

const Preview = ({ title, description, preview, code, className }: Props) => {
  const [isPreviewActive, setActive] = useState(true);
  const setPreviewActive = () => setActive(true);
  const setCodeActive = () => setActive(false);
  const copyCode = () => {
    if (navigator?.clipboard) navigator.clipboard.writeText(code ? code : '');
  };
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-moon-24 font-medium">{title}</h2>
        <PreviewSwitch
          isPreviewActive={isPreviewActive}
          setPreviewActive={setPreviewActive}
          setCodeActive={setCodeActive}
          copyCode={copyCode}
        />
      </div>
      {description && <p className="text-moon-16">{description}</p>}
      {isPreviewActive ? (
        <div
          className={mergeClassnames(
            'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku text-moon-14',
            'rounded-moon-s-sm',
            className
          )}
        >
          {preview}
        </div>
      ) : (
        code && <CodeSnippet>{code}</CodeSnippet>
      )}
    </section>
  );
};

export default Preview;
