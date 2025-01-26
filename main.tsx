import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './src/app';

const deferRender = async () => {
  const {worker} = await import('./mocks/browser');

  return worker.start();
};

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
