import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CashierApp } from './app/CashierApp';

const app = document.getElementById('app');
ReactDOM.hydrate(<CashierApp />, app);
