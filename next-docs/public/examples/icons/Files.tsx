import {
  FilesAdd,
  FilesCase,
  FilesClipboard,
  FilesClipboardText,
  FilesCode,
  FilesCopy,
  FilesDelete,
  FilesDraft,
  FilesExport,
  FilesExternalLink,
  FilesFile,
  FilesFolderClosed,
  FilesFolderOpen,
  FilesFolderOpenAlternative,
  FilesFolderZip,
  FilesGlasses,
  FilesImport,
  FilesMagazine,
  FilesPrint,
  FilesRemove,
  FilesSave,
  FilesScan,
  FilesShare,
  FilesSticker,
  FilesStickers,
  FilesTable,
  FilesText,
} from '@heathmont/moon-icons-tw';
import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    className: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="FilesAdd">
      <FilesAdd {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesCase">
      <FilesCase {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesClipboard">
      <FilesClipboard {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesClipboardText">
      <FilesClipboardText {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesCode">
      <FilesCode {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesCopy">
      <FilesCopy {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesDelete">
      <FilesDelete {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesDraft">
      <FilesDraft {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesExport">
      <FilesExport {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesExternalLink">
      <FilesExternalLink {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesFile">
      <FilesFile {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesFolderClosed">
      <FilesFolderClosed {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesFolderOpen">
      <FilesFolderOpen {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesFolderOpenAlternative">
      <FilesFolderOpenAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesFolderZip">
      <FilesFolderZip {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesGlasses">
      <FilesGlasses {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesImport">
      <FilesImport {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesMagazine">
      <FilesMagazine {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesPrint">
      <FilesPrint {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesRemove">
      <FilesRemove {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesSave">
      <FilesSave {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesScan">
      <FilesScan {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesShare">
      <FilesShare {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesSticker">
      <FilesSticker {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesStickers">
      <FilesStickers {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesTable">
      <FilesTable {...props} />
    </Icon>
    <Icon {...wrapperProps} name="FilesText">
      <FilesText {...props} />
    </Icon>
  </>
);

export default Example;
