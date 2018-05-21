import React from 'react';
import { render } from 'react-dom';
import { appRegistry } from 'app-mediator';
import App from './components/App';

const appRoot =
  appRegistry.findContainer('react-app', '.root') ||
  document.querySelector('.root');

render(<App />, appRoot);
