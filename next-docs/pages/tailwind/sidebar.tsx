import React, { useState } from 'react';
import { Button, Dialog } from '@heathmont/moon-components';
import Portal from '@reach/portal';

import Preview from '../../components/codePreview/Preview';
import Default from '../../components/tailwind/sidebar';
import SlideOver from '../../components/tailwind/slideOver';

import useExamples from '../../utils/useExamples';

export default function PageAvatar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const position = 'CENTER'; // or 'TOP'
  const maxWidth = '760px';

  //   const examples = useExamples('avatar');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Sidebar</h1>
        <p className="text-lg mt-4">Lorem</p>
      </section>

      <section className="mt-8">
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
          Display Sidebar
        </Button>

        {/* {isOpen && (
          <div className="absolute">
            <Portal>
              <Default />
            </Portal>
          </div>
        )} */}

        {isOpen && (
          <div className="">

              <SlideOver />
          </div>
        )}
      </section>
    </>
  );
}
