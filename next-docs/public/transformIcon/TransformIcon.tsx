import React, { useState, useRef, useCallback } from 'react';
import { GenericPicture } from '@heathmont/moon-icons';
import { Checkbox } from '@heathmont/moon-core';
import useTransform from './hooks/useTransform';
import { Button } from '@heathmont/moon-components';
import { camelCase, upperFirst } from 'lodash';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type IconComponentProps = {
  fileAsText: string;
  file?: string;
  name: string;
};

const setComponentName = (fileName: string): string =>
  upperFirst(camelCase(fileName?.split('.')?.slice(0, -1)?.join('.')));

const IconComponent: React.FC<IconComponentProps> = ({
  file,
  fileAsText,
  name,
}) => {
  const [isDimensions, toggleDimensions] = useState(false);
  const handleDimensionsClick = useCallback(
    () => toggleDimensions(!isDimensions),
    [isDimensions]
  );

  const svgExample = useTransform({
    svgCode: fileAsText,
    name: setComponentName(name),
    dimensions: isDimensions,
  });

  return (
    <li className="p-3">
      <div className="p-3 flex items-center justify-between">
        <Checkbox
          label="Set icon sizing to `em` for easy resizing via `font-size`."
          checked={isDimensions}
          onChange={handleDimensionsClick}
        />
        <CopyToClipboard text={svgExample || ''}>
          <Button variant="primary" size="small">
            Copy
          </Button>
        </CopyToClipboard>
      </div>
      <div className="p-3 flex items-top space-x-2 overflow-x-auto">
        <div className="w-9 h-9 mr-4 bg-gray-300 flex-shrink-0">
          <img className="h-full w-full rounded" src={file} />
        </div>
        <div className="text-sm text-gray-700 flex-1">
          <pre>{svgExample}</pre>
        </div>
      </div>
    </li>
  );
};

const TransformIcon: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string>('');
  const [fileAsText, setFileAsText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('SvgComponent');
  // const [uploaded, setUploaded] = useState(false);

  const handleInputChange = (e: any) => {
    const reader = new FileReader();
    const allFiles = e.target.files;
    const file = allFiles[0];

    reader.addEventListener(
      'load',
      () => {
        setFile(URL.createObjectURL(file));
        setFileAsText(reader.result as string);
        setFileName(file?.name);
      },
      false
    );

    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-5xl font-semibold">
        Transform SVG into React components.
      </h1>
      <div className="mt-8">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="border-gray-400 flex flex-col items-center py-12 px-6 rounded-md border-2 border-dashed">
              <GenericPicture fontSize="3.5rem" />

              <p className="text-xl text-gray-700">Drop files to upload</p>

              <p className="mb-2 text-gray-700">or</p>

              <label className="bg-white px-4 h-9 inline-flex items-center rounded border border-gray-300 shadow-sm text-sm font-medium text-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                Select files
                <input
                  ref={inputRef}
                  type="file"
                  name="files"
                  multiple
                  className="sr-only"
                  accept="image/svg"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          {fileAsText !== '' && (
            <ul className="my-6 bg-white rounded divide-y divide-gray-200 shadow">
              <IconComponent
                file={file}
                fileAsText={fileAsText}
                name={fileName}
              />
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransformIcon;
