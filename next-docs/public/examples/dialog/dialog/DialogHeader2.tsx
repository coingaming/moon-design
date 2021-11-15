import React from 'react';

import { Dialog, Button } from '@heathmont/moon-components';
import { Header } from '@heathmont/moon-core';
import { Footer } from '@heathmont/moon-core';
import {
  ControlsClose,
  FilesGlasses,
  FilesPrint,
  ControlsChevronLeft,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowDialog(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
        maxWidth="760px"
        position="TOP"
        hideCloseButton
        variant="new"
        heading={
          <Header
            backButton={<ControlsChevronLeft fontSize={rem(32)} />}
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
            primButton={
              <Button fullWidth variant="primary" size="small">
                Button
              </Button>
            }
            secButton={
              <Button fullWidth variant="tertiary" size="small">
                Button
              </Button>
            }
            tertButton={
              <Button fullWidth variant="secondary" size="small">
                Button
              </Button>
            }
            isDivider
          />
        </>
      </Dialog>
    </>
  );
};

export default Example;
