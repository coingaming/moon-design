import React from 'react';
import { GenericSettings } from '@heathmont/moon-icons';
import { Button } from '@moon/core';

const PageButton = () => {
  return (
    <div className="theme-moon-dark">
      <section className="grid gap-4 mt-8">Button</section>
      {/* Variants */}
      <section className="mt-8">
        <div className="flex justify-around w-full items-center">
          <Button>Primary is default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-around w-full items-center">
          <Button size="small">Small</Button>
          <Button>Medium is default</Button>
          <Button size="large">Large</Button>
          <Button size="xlarge">xLarge</Button>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-around w-full items-center">
          <Button iconLeft={<GenericSettings />}>IconLeft</Button>
          <Button iconLeft>
            <GenericSettings />
            IconLeft
          </Button>
          <Button iconRight={<GenericSettings />}>IconRight</Button>
          <Button iconRight>
            IconRight
            <GenericSettings />
          </Button>
          <Button iconOnly={<GenericSettings />} />
          <Button iconOnly>
            <GenericSettings />
          </Button>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-around w-full items-center">
          <Button iconRight={<GenericSettings />} fullWidth>
            Full width
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PageButton;
