import React from 'react';
import '@reach/dialog/styles.css';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/dialog/dialog/Default';
import DialogHeader from '../../../public/examples/dialog/dialog/DialogHeader';
import DialogHeader2 from '../../../public/examples/dialog/dialog/DialogHeader2';
import NoBackground from '../../../public/examples/dialog/dialog/NoBackground';
import NoClose from '../../../public/examples/dialog/dialog/NoClose';
import useExamples from '../../../utils/useExamples';

export default function PageDialog() {
  const examples = useExamples('dialog/dialog');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Dialog</h1>
        <p className="text-lg mt-4">
          The modal dialog (or modal as we call it) is used to capture attention
          so users are informed about a task, critical information or a decision
          they have to make. It usually resides on the top of a page.
        </p>
        <p className="text-lg mt-4">
          When modals are active, users are unable to see the content that’s
          currently on the page. They also won’t be able to return to what they
          were previously doing until the modal is dismissed or a task/decision
          is completed.
        </p>
        <p className="text-lg mt-4">
          As experienced astronauts, we recommend using modals sparingly. They
          are effective when used correctly, but they can also be disruptive.
        </p>

        <p className="text-lg mt-4 font-medium">When to use a modal dialog</p>
        <p className="text-lg">
          Modals should only be used when an almost-instant response is required
          from the user. The task within the modal should also be short and
          non-recurring. Should the task be a recurring one, this has to be done
          differently.
        </p>

        <p className="text-lg mt-4 font-medium">
          Presenting critical information
        </p>
        <p className="text-lg">
          Use modals to present critical urgent information to the user, e.g.
          system errors or something that has happened as a result of their
          action.
        </p>

        <p className="text-lg mt-4 font-medium">Confirming user decisions</p>
        <p className="text-lg">
          Confirming user decisions can be done with a modal. It’s important to
          ensure that the decision, and any potential actions that may result
          from it, is clearly explained within the modal.
        </p>

        <p className="text-lg mt-4 font-medium">About RTL and icon mirroring</p>
        <p className="text-lg">
          The icons are slots passed to the component. It is the developer's
          responsibility to pass a mirrored icon for RTL views, (ie, pass left
          or right arrows depending on the direction).
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Variant new"
          preview={<DialogHeader2 />}
          code={examples ? examples.DialogHeader2 : 'Loading'}
        />
      </section>

      {/* Default */}
      <section className="mt-12">
        <Preview
          title="Default example"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Example with separate header"
          preview={<DialogHeader />}
          code={examples ? examples.DialogHeader : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Example without close button"
          preview={<NoClose />}
          code={examples ? examples.NoClose : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Example with background color"
          preview={<NoBackground />}
          code={examples ? examples.NoBackground : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Dialog Footer component"
        data={[
          {
            name: 'disableScrollLock',
            type: 'boolean',
            required: false,
            default: '-',
            description: '',
          },
          {
            name: 'heading',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: ' ',
          },
          {
            name: 'hideCloseButton',
            type: 'boolean',
            required: false,
            default: '-',
            description: ' ',
          },
          {
            name: 'variant',
            type: 'default | new',
            required: false,
            default: 'false',
            description: ' ',
          },
          {
            name: 'position',
            type: 'TOP | CENTER',
            required: false,
            default: '-',
            description: ' ',
          },
          {
            name: 'maxWidth',
            type: 'string',
            required: false,
            default: '-',
            description: ' ',
          },
        ]}
      />
    </>
  );
}
