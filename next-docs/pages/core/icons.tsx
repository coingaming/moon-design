import React, { useState } from 'react';
import Preview from '../../components/codePreview/Preview';
import IconsBlock from '../../components/IconsBlock';
import IconsImportHelper from '../../components/IconsImportHelper';
import PageSection from '../../components/PageSection';
import Arrows from '../../public/examples/iconsTW/Arrows';
import Chart from '../../public/examples/iconsTW/Chart';
import Chat from '../../public/examples/iconsTW/Chat';
import Controls from '../../public/examples/iconsTW/Controls';
import DefaultIconSet from '../../public/examples/iconsTW/DefaultIconSet';
import Devices from '../../public/examples/iconsTW/Devices';
import Files from '../../public/examples/iconsTW/Files';
import Generic from '../../public/examples/iconsTW/Generic';
import Mail from '../../public/examples/iconsTW/Mail';
import Maps from '../../public/examples/iconsTW/Maps';
import Media from '../../public/examples/iconsTW/Media';
import Notifications from '../../public/examples/iconsTW/Notifications';
import Other from '../../public/examples/iconsTW/Other';
import Security from '../../public/examples/iconsTW/Security';
import Shop from '../../public/examples/iconsTW/Shop';
import Software from '../../public/examples/iconsTW/Software';
import Sport from '../../public/examples/iconsTW/Sport';
import Text from '../../public/examples/iconsTW/Text';
import Time from '../../public/examples/iconsTW/Time';
import Travel from '../../public/examples/iconsTW/Travel';
import Type from '../../public/examples/iconsTW/Type';
import useExamples from '../../utils/useExamples';

const PageIcons: React.FC = () => {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const props = { className: 'text-[2rem]' };
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
  const examples = useExamples('iconsTW');
  return (
    <>
      <h1 className="text-moon-32 font-medium">Icons</h1>
      <Preview
        title="Sizes and colours"
        preview={<DefaultIconSet />}
        code={examples ? examples.DefaultIconSet : 'Loading'}
      />
      <p className="text-moon-16">Please select icons for Import</p>
      {displaySelectedIconsImport ? (
        <IconsImportHelper
          text={`import { ${selectedIcons.join(
            ', '
          )} } from '@heathmont/moon-icons-tw';`}
        />
      ) : null}
      <PageSection title="Arrows">
        <IconsBlock>
          <Arrows wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Chart">
        <IconsBlock>
          <Chart wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Chat">
        <IconsBlock>
          <Chat wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Controls">
        <IconsBlock>
          <Controls wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Devices">
        <IconsBlock>
          <Devices wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Files">
        <IconsBlock>
          <Files wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Generic">
        <IconsBlock>
          <Generic wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Mail">
        <IconsBlock>
          <Mail wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Maps">
        <IconsBlock>
          <Maps wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Media">
        <IconsBlock>
          <Media wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Notifications">
        <IconsBlock>
          <Notifications wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Other">
        <IconsBlock>
          <Other wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Security">
        <IconsBlock>
          <Security wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Shop">
        <IconsBlock>
          <Shop wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Software">
        <IconsBlock>
          <Software wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Sport">
        <IconsBlock>
          <Sport wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Text">
        <IconsBlock>
          <Text wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Time">
        <IconsBlock>
          <Time wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Travel">
        <IconsBlock>
          <Travel wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Type">
        <IconsBlock>
          <Type wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
    </>
  );
};

export default PageIcons;
