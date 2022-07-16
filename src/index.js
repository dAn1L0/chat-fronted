import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatApp } from './ChatApp';
import './index.css';
import 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
)
