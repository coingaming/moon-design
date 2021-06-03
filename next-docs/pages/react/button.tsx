import React from 'react';
import Head from 'next/head';

import { Button } from '@heathmont/moon-components';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';
import PreviewSwitch from '../../components/codePreview/PreviewSwitch';

export default function PageBadge() {
  return (
    <>
      <section className="mt-6">
        <h1 className="text-5xl font-semibold">Button</h1>
        <p className="text-lg mt-4">
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates.
        </p>

        <p className="text-lg mt-4">
          Buttons are clickable elements with label text that describe the
          action that will happen when the users interact with it.
        </p>
      </section>
      <section className="mt-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl">Primary</h2>
          <PreviewSwitch />
        </div>
        <div className="mt-4">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <Button variant="primary">Active</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
