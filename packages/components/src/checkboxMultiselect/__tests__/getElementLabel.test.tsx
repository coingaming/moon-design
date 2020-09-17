import React from 'react';

import { getElementLabel } from '../private/getElementLabel';

describe('getElementLabel', () => {
  test('returns label itself when it is string', () => {
    expect(getElementLabel('Label')).toEqual('Label');
  });

  test('returns label when it is JSX Element', () => {
    const node = (
      <div>
        Label <br />
        <span>name</span>
      </div>
    );
    expect(getElementLabel(node)).toEqual('Label name');
  });
});
