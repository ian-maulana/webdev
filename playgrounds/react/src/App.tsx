import React from 'react';
import { Hello } from '@webdev/ui';

interface Props {}

const App: React.FC<Props> = () => {
  const [state, setState] = React.useState(true);
  return (
    <>
      <button onClick={() => setState(!state)}>Click</button>

      <Hello />
    </>
  );
};

export default App;
