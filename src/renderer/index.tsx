import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as path from 'path';
import { app, dialog } from 'electron'; // dialog modülünü içe aktar
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

export const OpenRedm = () => {
  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
};

export const deleteCache = () => {
  window.electron.ipcRenderer.once('deleteCache', (arg) => {
    console.log(arg);
  });
  window.electron.ipcRenderer.sendMessage('deleteCache', ['ping']);
};

export default [OpenRedm, deleteCache];
