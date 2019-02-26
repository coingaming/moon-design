import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/App';

const app = document.getElementById('app');
ReactDOM.hydrate(<App />, app);
