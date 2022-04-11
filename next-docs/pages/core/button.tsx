import React from 'react';
import { Button } from '@moon/core';

const PageButton = () => {
  return (
    <div className="theme-moon-dark">
      <section className="grid gap-4 mt-8">Button</section>
      {/* Variants */}
      <section className="mt-8">
        <Button />
      </section>
    </div>
  );
};

export default PageButton;
