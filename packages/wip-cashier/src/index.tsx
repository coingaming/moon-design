import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.dispose(() => {
    location.reload();
  });
}
