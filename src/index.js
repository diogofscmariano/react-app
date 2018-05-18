import React from 'react';
import { render } from 'react-dom';
import { getRoot } from './utils/registry';
import App from './App.jsx';

const appRoot =
	getRoot('react-app', '.root') || document.querySelector('.root');

render(<App />, appRoot);
