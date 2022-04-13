import React from 'react';
import { Loader } from '@moon/core';
import styles from '@moon/core/lib/loader/styles.module.css';

const Example = () => {

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">Loader</section>
      {/* Variants */}
      <section className={`${styles.moon__loader} mt-8` }>
        <div className="flex justify-around w-full items-center">
          <Loader />
        </div>
      </section>
    </div>
  );
};

export default Example;
