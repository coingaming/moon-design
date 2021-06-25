import React from 'react';

import { version } from '../../../lerna.json';

export default function Version() {
  return (
    <div className="mt-4 px-3 py-2 text-sm leading-5 text-gray-500">
      <p>Moon.io version:</p>
      <p>{version}</p>
    </div>
  );
}
