import { useState, useCallback, useEffect } from 'react';
import { Checkbox, Loader, Button } from '@heathmont/moon-core-tw';
import useTransform from './hooks/useTransform';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { camelCase, upperFirst } from 'lodash';
import { GenericClose } from '@heathmont/moon-icons';
import CodeSnippet from '../../components/CodeSnippet';

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
      <div className="flex flex-col gap-6 text-chiChi">
        <GenericClose fontSize="2rem" />
        <span className="text-moon-16">
          Corrupted file or file type is not supported
        </span>
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center">
        <Loader size="2xs" />
      </div>
    );
  return (
    <div className="flex flex-col gap-6">
      <div className="ps-1">
        <Checkbox
          label="Set icon sizing to `em` for easy resizing via `font-size`."
          checked={isDimensions}
          onChange={handleDimensionsClick}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-16 h-16 p-2 bg-goku rounded-moon-s-sm">
          <img className="h-full w-full" src={iconSrc} alt="Icon preview" />
        </div>
        <CopyToClipboard text={data || ''} onCopy={() => setCopied(true)}>
          <Button animation={copied && 'success'}>Copy</Button>
        </CopyToClipboard>
      </div>
      <CodeSnippet>{data}</CodeSnippet>
    </div>
  );
};

export default IconPreview;
