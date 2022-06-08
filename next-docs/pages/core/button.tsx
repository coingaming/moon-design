import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Animations from '../../public/examples/buttonTW/Animations';
import Disabled from '../../public/examples/buttonTW/Disabled';
import FullWidth from '../../public/examples/buttonTW/FullWidth';
import Icons from '../../public/examples/buttonTW/Icons';
import Sizes from '../../public/examples/buttonTW/Sizes';
import Variants from '../../public/examples/buttonTW/Variants';
import useExamples from '../../utils/useExamples';

const PageButton = () => {
  const examples = useExamples('buttonTW');
  return (
    <>
      <ComponentPageDescription title="Button">
        <p>
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates. Buttons are clickable elements
          with label text that describe the action that will happen when the
          users interact with it.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Full width"
        preview={<FullWidth />}
        code={examples ? examples.FullWidth : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Animations"
        preview={<Animations />}
        code={examples ? examples.Animations : 'Loading'}
      />
    </>
  );
};

export default PageButton;
