import React from 'react';
import { Dialog, Stack } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
      <Dialog
        backgroundColor="limegreen"
        isOpen={showDialog}
        maxWidth="760px"
        onDismiss={() => setShowDialog(false)}
        position="TOP"
      >
        <Stack>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit massa at lorem fermentum volutpat. Aliquam varius faucibus
            turpis, in facilisis dui dictum ac. Nulla ac consequat enim. Ut
            lobortis ultricies mauris eget volutpat. Aliquam aliquam nisl in
            nulla sagittis, eget viverra est ullamcorper. Morbi vel eros sed
            mauris dignissim congue et nec ligula. Duis quis tellus a est
            facilisis finibus. Duis varius libero id arcu pretium, et ultrices
            diam tincidunt.
          </p>
        </Stack>
      </Dialog>
    </>
  );
};

export default Example;
