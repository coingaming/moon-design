import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClientSideApp } from './app/app';

const app = document.getElementById('app');
ReactDOM.hydrate(<ClientSideApp />, app);
