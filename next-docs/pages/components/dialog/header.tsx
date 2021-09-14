import React from 'react';

import { Header } from '@heathmont/moon-core';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import {
  FilesGlasses,
  FilesPrint,
  ControlsChevronLeft,
  ControlsClose,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

export default function PageDialogHeader() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Header</h1>
        <p className="text-lg mt-4">
          Header module variants to be used in Modal dialogs and popovers.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title=""
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header>Title of the modal</Header>
              </div>
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header closeButton={<ControlsClose fontSize={rem(32)} />}>
                  Title of the modal
                </Header>
              </div>
            </div>
          }
        />
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title=""
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header
                  backButton={<ControlsChevronLeft fontSize={rem(32)} />}
                  closeButton={<ControlsClose fontSize={rem(32)} />}
                >
                  Title of the modal
                </Header>
              </div>
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header
                  backButton={<ControlsChevronLeft fontSize={rem(32)} />}
                  closeButton={<ControlsClose fontSize={rem(32)} />}
                />
              </div>
            </div>
          }
        />
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title=""
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header
                  closeButton={<ControlsClose fontSize={rem(32)} />}
                  icons={[<FilesGlasses />, <FilesPrint />]}
                >
                  Title of the modal
                </Header>
              </div>
              <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
                <Header
                  closeButton={<ControlsClose fontSize={rem(32)} />}
                  icons={[<FilesGlasses />, <FilesPrint />]}
                />
              </div>
            </div>
          }
        />
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Dialog Header"
          preview={
            <div className="flex justify-around items-center w-full max-w-screen-sm">
              <Header
                backButton={<ControlsChevronLeft fontSize={rem(32)} />}
                closeButton={<ControlsClose fontSize={rem(32)} />}
                icons={[<FilesGlasses />, <FilesPrint />]}
              >
                Title of the modal title of the modal title of the modal
              </Header>
            </div>
          }
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Label component</h2>
        <Table
          data={[
            {
              name: 'backButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Back button icon or element',
            },
            {
              name: 'closeButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Close icon or element',
            },
            {
              name: 'icons',
              type: 'JSX.Element[]',
              required: false,
              default: '-',
              description: 'Array of icons',
            },
          ]}
        />
      </section>
    </>
  );
}
