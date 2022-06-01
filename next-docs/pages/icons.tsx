import React, { useState } from 'react';
import { FilesCopy } from '@heathmont/moon-icons';
import Preview from '../components/codePreview/Preview';
import Arrows from '../public/examples/icons/Arrows';
import Chart from '../public/examples/icons/Chart';
import Chat from '../public/examples/icons/Chat';
import Controls from '../public/examples/icons/Controls';
import Devices from '../public/examples/icons/Devices';
import Files from '../public/examples/icons/Files';
import Generic from '../public/examples/icons/Generic';
import Mail from '../public/examples/icons/Mail';
import Maps from '../public/examples/icons/Maps';
import Media from '../public/examples/icons/Media';
import Notifications from '../public/examples/icons/Notifications';
import Other from '../public/examples/icons/Other';
import Security from '../public/examples/icons/Security';
import Shop from '../public/examples/icons/Shop';
import Software from '../public/examples/icons/Software';
import Sport from '../public/examples/icons/Sport';
import Text from '../public/examples/icons/Text';
import Time from '../public/examples/icons/Time';
import Travel from '../public/examples/icons/Travel';
import Type from '../public/examples/icons/Type';

const Block: React.FC = ({ children }) => (
  <div className="flex flex-row flex-wrap gap-4 bg-white mt-4 px-4 py-3 rounded-lg">
    {children}
  </div>
);

const SubHeader: React.FC = ({ children }) => (
  <h2 className="text-2xl mt-8">{children}</h2>
);

const ImportHelper: React.FC<{ text: string }> = ({ text }) => (
  <>
    <h2 className="text-2xl font-medium mt-8">Importing</h2>
    <pre className="overflow-scroll bg-white mt-4 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500">
      {text}
    </pre>
  </>
);

const TextSizesPreview = () => (
  <Preview
    title="Sizes &amp; colours"
    preview={
      <div className="flex items-center gap-20">
        <FilesCopy fontSize="1rem" />
        <FilesCopy fontSize="2rem" />
        <FilesCopy fontSize="3rem" />
        <FilesCopy fontSize="3rem" color="cell.100" />
      </div>
    }
    code={`import { FilesCopy } from '@heathmont/moon-icons';

<FilesCopy fontSize="1rem" />
<FilesCopy fontSize="2rem" />
<FilesCopy fontSize="3rem" />
<FilesCopy fontSize="3rem" color="cell.100"/>`}
  />
);

const InternalText: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4 font-medium">{children}</p>
);

export default function PageIcons() {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

  const props = { fontSize: '2rem' };

  const addIconToSelected: (iconName: string) => string[] = (iconName) =>
    selectedIcons.concat(iconName);
  const removeIconFromSelected = (removedIconName: string) =>
    selectedIcons.filter((name) => name !== removedIconName);

  const toggleSelectedIcons: (iconName: string) => string[] = (iconName) => {
    if (selectedIcons.includes(iconName)) {
      return removeIconFromSelected(iconName);
    }
    return addIconToSelected(iconName);
  };

  const displaySelectedIconsImport = selectedIcons.length > 0;

  const onClick = (iconName: string) =>
    setSelectedIcons(toggleSelectedIcons(iconName));
  const wrapperProps = { onClick, selectedIcons };

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Icons</h1>
        {/* <h2 className="text-3xl font-medium mt-8">Using</h2> */}
      </section>

      <section className="mt-8">
        <TextSizesPreview />
      </section>

      <InternalText>Please select icons for Import</InternalText>

      {displaySelectedIconsImport ? (
        <ImportHelper
          text={`import {
  ${selectedIcons.join(', ')}
} from '@heathmont/moon-icons';`}
        />
      ) : null}

      <section className="mt-8">
        <SubHeader>Arrows</SubHeader>
        <Block>
          <Arrows wrapperProps={wrapperProps} props={props} />
        </Block>
        <SubHeader>Chart</SubHeader>
        <Block>
          <Chart wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Chat</SubHeader>
        <Block>
          <Chat wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Controls</SubHeader>
        <Block>
          <Controls wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Devices</SubHeader>
        <Block>
          <Devices wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Files</SubHeader>
        <Block>
          <Files wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Generic</SubHeader>
        <Block>
          <Generic wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Mail</SubHeader>
        <Block>
          <Mail wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Maps</SubHeader>
        <Block>
          <Maps wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Media</SubHeader>
        <Block>
          <Media wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Notifications</SubHeader>
        <Block>
          <Notifications wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Other</SubHeader>
        <Block>
          <Other wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Security</SubHeader>
        <Block>
          <Security wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Shop</SubHeader>
        <Block>
          <Shop wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Software</SubHeader>
        <Block>
          <Software wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Sport</SubHeader>
        <Block>
          <Sport wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Text</SubHeader>
        <Block>
          <Text wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Time</SubHeader>
        <Block>
          <Time wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Travel</SubHeader>
        <Block>
          <Travel wrapperProps={wrapperProps} props={props} />
        </Block>

        <SubHeader>Type</SubHeader>
        <Block>
          <Type wrapperProps={wrapperProps} props={props} />
        </Block>
      </section>
    </>
  );
}
