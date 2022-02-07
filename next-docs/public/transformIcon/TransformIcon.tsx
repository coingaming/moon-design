import React, { useState, useRef } from 'react';
import { GenericPicture, GenericClose } from '@heathmont/moon-icons';
import useDragging from './hooks/useDragging';
import IconPreview from './IconPreview';

const FILE_TYPES = ['svg', 'svg+xml'];

const checkTypes = (file: File): boolean => {
  const fileType: string = file.type.toLocaleLowerCase();
  const extensionIndex: number = fileType.lastIndexOf('/');
  const extension: string = fileType.substring(extensionIndex + 1);
  const loweredTypes = FILE_TYPES.map((type) => type.toLowerCase());
  return loweredTypes.includes(extension);
};

const TransformIcon: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileAsText, setFileAsText] = useState<string>('');
  const [error, setError] = useState(false);

  const handleChanges = (file: File) => {
    if (!file) return false;
    if (!checkTypes(file)) {
      setError(true);
      return false;
    }
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        setFile(file);
        setFileAsText(reader.result as string);
      },
      false
    );
    reader.readAsText(file);
    setError(false);
  };

  const handleInputChange = (ev: any) => {
    const allFiles = ev.target.files;
    const file = allFiles[0];
    handleChanges(file);
  };

  const dragging = useDragging({
    divRef,
    handleChanges,
  });

  return (
    <section className="mt-8">
      <h1 className="text-5xl font-semibold">
        Transform SVG into React components.
      </h1>
      <div className="mt-8">
        <div className="py-6">
          <div className="mx-auto max-w-7xl">
            <div
              ref={divRef}
              className={`${
                dragging
                  ? 'border-gray-200'
                  : error
                  ? 'border-red-400'
                  : 'border-gray-400'
              } flex flex-col items-center py-12 px-6 rounded-md border-2 border-dashed`}
            >
              <GenericPicture fontSize="3.5rem" />
              <p className="text-xl text-gray-700">Drop files to upload</p>
              <p className="mb-2 text-gray-700">or</p>
              <label className="bg-white px-4 h-9 inline-flex items-center rounded border border-gray-300 shadow-md text-sm font-medium text-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 cursor-pointer">
                Select files
                <input
                  ref={inputRef}
                  type="file"
                  name="files"
                  className="sr-only"
                  accept=".svg"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          {error && (
            <div className="my-8 py-6 ">
              <div className="p-4 bg-white rounded shadow flex items-center">
                <GenericClose fontSize="2rem" color="chiChi.100" />
                <span className="text-red-600 pl-2">
                  File type is not supported
                </span>
              </div>
            </div>
          )}

          {fileAsText !== '' && (
            <ul className="my-8 py-6">
              <IconPreview
                file={file}
                fileAsText={fileAsText}
                setError={setError}
              />
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransformIcon;
