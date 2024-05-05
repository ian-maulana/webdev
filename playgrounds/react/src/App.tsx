import React from 'react';
import {
  Badge,
  Visible,
  Card,
  Status,
  Divider,
  FormGroup,
  ContainedButton,
  OutlinedButton,
  TextButton,
} from '@webdev/ui';

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
          <Status color="primary">Primary</Status>
          <Status color="secondary">Secondary</Status>
          <Status color="info">Info</Status>
          <Status color="success">Success</Status>
          <Status color="critical">Critical</Status>
          <Status color="warning">Warning</Status>
        </div>

        <Divider />

        <div
          style={{
            margin: '16px 0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <ContainedButton color="primary">Primary</ContainedButton>
          <ContainedButton color="success">Success</ContainedButton>
          <ContainedButton color="info">Info</ContainedButton>
          <ContainedButton color="critical">Critical</ContainedButton>
          <ContainedButton color="secondary">Secondary</ContainedButton>
          <ContainedButton color="warning">Warning</ContainedButton>
        </div>

        <Divider />

        <div
          style={{
            margin: '16px 0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <OutlinedButton color="primary">Primary</OutlinedButton>
          <OutlinedButton color="success">Success</OutlinedButton>
          <OutlinedButton color="info">Info</OutlinedButton>
          <OutlinedButton color="critical">Critical</OutlinedButton>
          <OutlinedButton color="secondary">Secondary</OutlinedButton>
          <OutlinedButton color="warning">Warning</OutlinedButton>
        </div>

        <Divider />

        <div
          style={{
            margin: '16px 0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <TextButton color="primary">Primary</TextButton>
          <TextButton color="success">Success</TextButton>
          <TextButton color="info">Info</TextButton>
          <TextButton color="secondary">Secondary</TextButton>
          <TextButton color="warning">Warning</TextButton>
          <TextButton color="critical">Critical</TextButton>
        </div>

        <Divider />

        <div
          style={{
            margin: '16px 0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Visible visible={show}>
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="critical">Critical</Badge>
            <Badge color="secondary">Secondary</Badge>
          </Visible>
        </div>

        <Divider />

        <FormGroup label="Test" name="Test">
          Hello
        </FormGroup>
      </Card>
    </>
  );
};

export default App;
