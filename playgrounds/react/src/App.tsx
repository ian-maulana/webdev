import React from 'react';
import { Badge, Visible, Card } from '@webdev/ui';

interface Props {}

const App: React.FC<Props> = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Card>
        <div style={{ margin: '16px 0' }}>
          <button onClick={() => setShow(!show)}>Click</button>
        </div>

        <Visible visible={show}>
          <Badge color="primary">Test</Badge>
        </Visible>
      </Card>
    </>
  );
};

export default App;
