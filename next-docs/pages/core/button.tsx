import React from 'react';
import { GenericSettings } from '@heathmont/moon-icons';
import { Button } from '@moon/core';

const PageButton = () => {
  return (
    <div className="theme-moon-dark">
      <section className="mt-8 text-3xl font-bold">Variants</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button>Primary is default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Sizes</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button size="xsmall">xSmall</Button>
          <Button size="small">Small</Button>
          <Button>Medium is default</Button>
          <Button size="large">Large</Button>
          <Button size="xlarge">xLarge</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Icons</section>
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

      <section className="mt-8 text-3xl font-bold">Full width</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button iconRight={<GenericSettings fontSize="1.5rem" />} fullWidth>
            Full width
          </Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Disabled</section>
      {/* Variants */}
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around w-full items-center">
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <section className="mt-8 text-3xl font-bold">Animations</section>
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
