import React from 'react';
import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons';

const PageButton = () => {
  return (
    <div>
      <section className="mt-8 text-3xl font-medium">Variants</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button>Primary is default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Sizes</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button size="xs">xSmall</Button>
          <Button size="sm">Small</Button>
          <Button>Medium is default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">xLarge</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Icons</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button iconLeft={<GenericSettings fontSize="1.5rem" />}>
            IconLeft
          </Button>
          <Button iconLeft>
            <GenericSettings fontSize="1.5rem" />
            IconLeft
          </Button>
          <Button iconRight={<GenericSettings fontSize="1.5rem" />}>
            IconRight
          </Button>
          <Button iconRight>
            IconRight
            <GenericSettings fontSize="1.5rem" />
          </Button>
          <Button iconOnly={<GenericSettings fontSize="1.5rem" />} />
          <Button iconOnly>
            <GenericSettings fontSize="1.5rem" />
          </Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Full width</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button iconRight={<GenericSettings fontSize="1.5rem" />} fullWidth>
            Full width
          </Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Disabled</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-medium">Animations</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button animation="progress">Progress</Button>
          <Button animation="success">Success</Button>
          <Button animation="error">Error</Button>
          <Button animation="pulse">Pulse</Button>
        </div>
      </div>
    </div>
  );
};

export default PageButton;
