import React, { useState, useContext } from 'react';
import IframeResizer from 'iframe-resizer-react';

import { ELIXIR_BASE_URL } from '../../consts/consts';
import classNames from '../../utils/classNames';
import { store } from '../elixirThemes/ElixirThemeProvider';

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
  elixirLink?: string;
}

export default function Preview({
  title,
  preview,
  code,
  elixirLink,
}: PreviewProps) {
  const [isPreviewActive, setActive] = useState(true);
  const setPreviewActive = () => setActive(true);
  const setCodeActive = () => setActive(false);
  const {
    state: { isElixir, isDarkMode, elixirTheme },
  } = useContext(store);

  const elixirPreview = elixirLink ? (
    <IframeResizer
      src={`${ELIXIR_BASE_URL}/iframe/${elixirTheme}-${
        isDarkMode ? 'dark' : 'light'
      }/${elixirLink}`}
      style={{ width: '1px', minWidth: '100%' }}
    />
  ) : (
    <div>No elixir code for this example yet</div>
  );

  return isElixir ? (
    <>{elixirPreview}</>
  ) : (
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
