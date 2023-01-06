import { useState, useRef } from 'react';
import { GenericPicture, GenericClose } from '@heathmont/moon-icons-tw';
import useDragging from './hooks/useDragging';
import IconPreview from './IconPreview';
import { Button } from '@heathmont/moon-core-tw';

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
    <div className="flex flex-col gap-12">
      <div
        ref={divRef}
        className={`${
          dragging ? 'border-bulma' : error ? 'border-chichi' : 'border-beerus'
        } flex flex-col gap-4 items-center py-12 px-6 rounded-moon-s-md border-2 border-dashed text-trunks transition-colors duration-200`}
      >
        <GenericPicture className="text-moon-48" />
        <p className="text-moon-20">Drop files to upload</p>
        <p className="text-moon-16">or</p>
        <div className="relative">
          <Button variant="secondary">Select files</Button>
          <label className="absolute inset-0 cursor-pointer">
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
        <div className="flex gap-2 items-center text-chichi">
          <GenericClose className="text-moon-32" />
          <span className="text-moon-16">File type is not supported</span>
        </div>
      )}

      {fileAsText !== '' && (
        <IconPreview file={file} fileAsText={fileAsText} setError={setError} />
      )}
    </div>
  );
};

export default TransformIcon;
