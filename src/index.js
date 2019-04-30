import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const app = document.getElementById('app');
const thisWindows = window

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , app);