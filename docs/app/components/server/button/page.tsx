import { Animations } from '@/app/components/server/button/examples/Animations';
import { Default } from '@/app/components/server/button/examples/Default';
import { Disabled } from '@/app/components/server/button/examples/Disabled';
import { FullWidth } from '@/app/components/server/button/examples/FullWidth';
import { Icons } from '@/app/components/server/button/examples/Icons';
import { Multiline } from '@/app/components/server/button/examples/Multiline';
import { Sizes } from '@/app/components/server/button/examples/Sizes';
import { Variants } from '@/app/components/server/button/examples/Variants';
import ExampleSection from '@/app/components/shared/exampleSection';
import PropsTable from '@/app/components/shared/propsTable';
import QuickNav from '@/app/components/shared/QuickNav';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Button() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.button.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
      <h1 className="font-medium text-moon-32">Button</h1>
      <MDX markdown={server.button.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        description="Buttons in moon.io have specific functions and their appearance indicates those functions to the user. To ensure that the buttons communicate the right actions, it is essential to use the appropriate variants consistently across products."
        component={<Default />}
        code={server.button.examples.Default}
      />
      <ExampleSection
        title="Sizes"
        component={<Sizes />}
        code={server.button.examples.Sizes}
      />
      <ExampleSection
        title="Variants"
        component={<Variants />}
        code={server.button.examples.Variants}
      />
      <ExampleSection
        title="Icons"
        component={<Icons />}
        code={server.button.examples.Icons}
      />
      <ExampleSection
        title="FullWidth"
        component={<FullWidth />}
        code={server.button.examples.FullWidth}
      />
      <ExampleSection
        title="Disabled"
        component={<Disabled />}
        code={server.button.examples.Disabled}
      />
      <ExampleSection
        title="Animations"
        component={<Animations />}
        code={server.button.examples.Animations}
      />
      <ExampleSection
        title="Multiline"
        component={<Multiline />}
        code={server.button.examples.Multiline}
      />
      <PropsTable
        title="Button props"
        data={[
          {
            name: 'animation',
            type: "'progress' | 'success' | 'error' | 'pulse' | boolean",
            default: '-',
            description: 'Animation of button',
          },
          {
            name: 'as',
            type: 'a | button',
            default: 'button',
            description: 'Rendered HTML element',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disabled button',
          },
          {
            name: 'fullWidth',
            type: 'boolean',
            default: 'false',
            description: 'Full width button',
          },
          {
            name: 'iconLeft',
            type: 'JSX.Element',
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconRight',
            type: 'JSX.Element',
            default: '-',
            description: 'Right icon',
          },
          {
            name: 'size',
            type: 'xs | sm | md | lg | xl',
            default: 'md',
            description: 'Size of button',
          },
          {
            name: 'variant',
            type: 'fill | outline | ghost',
            default: 'fill',
            description: 'Visual/Logical variant of button',
          },
        ]}
      />
    </div>
  );
}
