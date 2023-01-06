import React, { useState } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import IconsBlock from '../../components/IconsBlock';
import IconsImportHelper from '../../components/IconsImportHelper';
import PageSection from '../../components/PageSection';
import Arrows from '../../public/examples/icons/Arrows';
import Chart from '../../public/examples/icons/Chart';
import Chat from '../../public/examples/icons/Chat';
import Controls from '../../public/examples/icons/Controls';
import Customization from '../../public/examples/icons/Customization';
import Default from '../../public/examples/icons/Default';
import Devices from '../../public/examples/icons/Devices';
import Files from '../../public/examples/icons/Files';
import Generic from '../../public/examples/icons/Generic';
import Mail from '../../public/examples/icons/Mail';
import Maps from '../../public/examples/icons/Maps';
import Media from '../../public/examples/icons/Media';
import Notifications from '../../public/examples/icons/Notifications';
import Other from '../../public/examples/icons/Other';
import Security from '../../public/examples/icons/Security';
import Shop from '../../public/examples/icons/Shop';
import Software from '../../public/examples/icons/Software';
import Sport from '../../public/examples/icons/Sport';
import Text from '../../public/examples/icons/Text';
import Time from '../../public/examples/icons/Time';
import Travel from '../../public/examples/icons/Travel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const props = { className: 'text-moon-32' };
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
  const examples = useExamples('icons');
  return (
    <>
      <ComponentPageDescription title="Icons" isInProgress>
        <p>Icons are used in other components and user interfaces.</p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Different sizes and colours"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      {displaySelectedIconsImport ? (
        <IconsImportHelper
          text={`import { ${selectedIcons.join(
            ', '
          )} } from '@heathmont/moon-icons-tw';`}
        />
      ) : (
        <p className="text-moon-16">Please select icons for Import</p>
      )}
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
    </>
  );
};

export default Example;
