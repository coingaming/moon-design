import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Backdrop from '../../public/examples/drawer/Backdrop';
import Default from '../../public/examples/drawer/Default';
import Positions from '../../public/examples/drawer/Positions';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('drawer');
  return (
    <>
      <ComponentPageDescription title="Drawer" isInProgress>
        <p>
          The Drawer component is a panel that slides out from the edge of the
          screen. It can be useful when you need users to complete a task or
          view some details without leaving the current page.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Positions"
        preview={<Positions />}
        code={examples ? examples.Positions : 'Loading'}
      />
      <Preview
        title="With Backdrop"
        preview={<Backdrop />}
        code={examples ? examples.Backdrop : 'Loading'}
      />
    </>
  );
};

export default Example;
