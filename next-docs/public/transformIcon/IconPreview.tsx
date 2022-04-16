import React, { useState, useCallback, useEffect } from 'react';
import { Checkbox, Loader, Button } from '@heathmont/moon-core';
import useTransform from './hooks/useTransform';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { camelCase, upperFirst } from 'lodash';
import { GenericClose, GenericCheckAlternative } from '@heathmont/moon-icons';

const DEFAULT_NAME = 'SvgComponent';

const setComponentName = (fileName: string): string =>
  upperFirst(camelCase(fileName?.split('.')?.slice(0, -1)?.join('.')));

type IconPreviewProps = {
  fileAsText: string;
  file?: File | null;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const IconPreview: React.FC<IconPreviewProps> = ({
  file,
  fileAsText,
  setError,
}) => {
  const name = file?.name || DEFAULT_NAME;
  const iconSrc = URL.createObjectURL(file as File);
  const [copied, setCopied] = useState(false);
  const [isDimensions, toggleDimensions] = useState(false);
  const handleDimensionsClick = useCallback(
    () => toggleDimensions(!isDimensions),
    [isDimensions]
  );

  const { data, loading, error } = useTransform({
    svgCode: fileAsText,
    name: setComponentName(name),
    dimensions: isDimensions,
  });

  useEffect(() => {
    if (error) {
      setError(true);
    }
    setError(false);
  }, [error]);

  useEffect(() => {
    setCopied(false);
  }, [file]);

  if (error)
    return (
      <div className="p-6 flex items-center bg-white rounded shadow">
        <GenericClose fontSize="2rem" color="chiChi.100" />
        <span className="text-red-600 pl-2">
          Corrupted file or file type is not supported
        </span>
      </div>
    );
  if (loading)
    return (
      <div className="p-6 flex items-center justify-center bg-white rounded shadow">
        <Loader />
      </div>
    );
  return (
    <li>
      <div className="py-3 px-2 flex items-center justify-between">
        <Checkbox
          label="Set icon sizing to `em` for easy resizing via `font-size`."
          checked={isDimensions}
          onChange={handleDimensionsClick}
        />
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="w-16 h-16 mr-4 p-2 bg-gray-300 flex-shrink-0">
          <img className="h-full w-full rounded" src={iconSrc} />
        </div>
        <CopyToClipboard text={data || ''} onCopy={() => setCopied(true)}>
          <Button>
            {copied ? <GenericCheckAlternative fontSize="2rem" /> : 'Copy'}
          </Button>
        </CopyToClipboard>
      </div>
      <div className="p-6 flex items-top space-x-2 overflow-x-auto bg-white rounded shadow">
        <div className="text-sm text-gray-700 flex-1">
          <pre>{data}</pre>
        </div>
      </div>
    </li>
  );
};

export default IconPreview;
