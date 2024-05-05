import React from 'react';
import { Badge, Visible, Card, Status, Divider, FormGroup } from '@webdev/ui';

interface Props {}

const App: React.FC<Props> = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Card>
        <div style={{ margin: '16px 0' }}>
          <button onClick={() => setShow(!show)}>Click</button>
        </div>

        <Divider />

        <div style={{ margin: '16px 0' }}>
          <Status color="success">Active</Status>
        </div>

        <Divider />

        <Visible visible={show}>
          <Badge color="primary">Test</Badge>
        </Visible>

        <Divider />

        <FormGroup label="Test" name="Test">
          Hello
        </FormGroup>
      </Card>
    </>
  );
};

export default App;
