import React from 'react';
import { createRoot } from 'react-dom/client';

import { Hello } from '@webdev/ui';

const element: any = document.getElementById('root');
const root = createRoot(element); // createRoot(container!) if you use TypeScript
root.render(
  <div style={{ padding: '40px' }}>
    <Hello />
  </div>,
);
