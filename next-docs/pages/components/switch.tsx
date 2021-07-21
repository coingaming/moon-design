import { useState } from 'react';

import { Switch } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const PreviewSwitch = () => {
  const [state, setState] = useState(true);

  return (
    <Preview
      title="Default"
      preview={
        <>
          <Switch
            checked={state}
            onChange={(e) => setState(e.target.checked)}
          />
          ;
        </>
      }
      code={`import { useState } from 'react'
import { Switch } from '@heathmont/moon-components';

const [state, setState] = useState(true);

<Switch checked={state} onChange={e => setState(e.target.checked)} />
`}
    />
  );
};

const PreviewSwitchTheme = () => {
  const [state, setState] = useState(true);

  return (
    <Preview
      title="Dark &amp; Light mode"
      preview={
        <>
          <Switch
            checked={state}
            onChange={(e) => setState(e.target.checked)}
            colorScheme
          />
        </>
      }
      code={`import { useState } from 'react'
import { Switch } from '@heathmont/moon-components';

const [state, setState] = useState(true);

<Switch
  checked={state}
  onChange={(e) => setState(e.target.checked)}
  colorScheme
/>
`}
    />
  );
};

const PreviewSwitchCaption = () => {
  const [state, setState] = useState(true);

  return (
    <Preview
      title="With captions"
      preview={
        <>
          <Switch
            checked={state}
            onChange={(e) => setState(e.target.checked)}
            captionUnchecked="OFF"
            captionChecked="ON"
          />
        </>
      }
      code={`import { useState } from 'react'
import { Switch } from '@heathmont/moon-components';

const [state, setState] = useState(true);

<Switch
  checked={state}
  onChange={e => setState(e.target.checked)}
  captionUnchecked="OFF"
  captionChecked="ON"
/>
`}
    />
  );
};

const PreviewSwitchThemeCaption = () => {
  const [state, setState] = useState(true);

  return (
    <Preview
      title="Dark &amp; Light mode with captions"
      preview={
        <>
          <Switch
            checked={state}
            onChange={(e) => setState(e.target.checked)}
            colorScheme
            captionUnchecked="AM"
            captionChecked="PM"
          />
        </>
      }
      code={`import { useState } from 'react'
import { Switch } from '@heathmont/moon-components';

const [state, setState] = useState(true);

<Switch
      checked={state}
      onChange={e => setState(e.target.checked)}
      colorScheme
      captionUnchecked="AM"
      captionChecked="PM"
    />
`}
    />
  );
};

export default function PageSwitch() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Checkbox</h1>
        <p className="text-lg mt-4">Checkbox.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewSwitch />
      </section>

      <section className="mt-8">
        <PreviewSwitchTheme />
      </section>

      <section className="mt-8">
        <PreviewSwitchCaption />
      </section>

      <section className="mt-8">
        <PreviewSwitchThemeCaption />
      </section>
    </>
  );
}
