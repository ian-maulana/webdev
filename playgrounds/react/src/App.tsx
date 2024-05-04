import React from 'react';
import { Badge, Visible } from '@webdev/ui';

interface Props {}

const App: React.FC<Props> = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <div style={{ margin: '16px 0' }}>
        <button onClick={() => setShow(!show)}>Click</button>
      </div>

      <Visible visible={show}>
        <Badge color="primary">Test</Badge>
      </Visible>
    </>
  );
};

export default App;
