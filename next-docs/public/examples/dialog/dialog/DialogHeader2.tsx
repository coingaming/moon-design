import React from 'react';
import { Dialog } from '@heathmont/moon-components';
import { Header, Footer, Button } from '@heathmont/moon-core';

import {
  ControlsClose,
  FilesGlasses,
  FilesPrint,
  ControlsExpand,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
      <Dialog
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
        maxWidth="760px"
        position="TOP"
        hideCloseButton
        variant="new"
        heading={
          <Header
            backButton={<ControlsExpand fontSize={rem(32)} />}
            closeButton={
              <ControlsClose
                fontSize={rem(32)}
                onClick={() => setShowDialog(false)}
              />
            }
            icons={[<FilesGlasses />, <FilesPrint />]}
            isDivider={true}
          >
            Title of the modal title of the modal title of the modal
          </Header>
        }
      >
        <>
          <p className="p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit massa at lorem fermentum volutpat. Aliquam varius faucibus
            turpis, in facilisis dui dictum ac. Nulla ac consequat enim. Ut
            lobortis ultricies mauris eget volutpat. Aliquam aliquam nisl in
            nulla sagittis, eget viverra est ullamcorper. Morbi vel eros sed
            mauris dignissim congue et nec ligula. Duis quis tellus a est
            facilisis finibus. Duis varius libero id arcu pretium, et ultrices
            diam tincidunt.
          </p>
          <Footer
            primButton={<Button>Primary</Button>}
            secButton={<Button variant="secondary">Secondary</Button>}
            tertButton={<Button variant="ghost">Ghost</Button>}
            isDivider
          />
        </>
      </Dialog>
    </>
  );
};

export default Example;
