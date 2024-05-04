import React from 'react';
import { Hello, Visible } from '@webdev/ui';

interface Props {}

const App: React.FC<Props> = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)} style={{ margin: '16px 0' }}>
        Click
      </button>

      <Visible visible={show}>
        <Hello />
      </Visible>
    </>
  );
};

export default App;
