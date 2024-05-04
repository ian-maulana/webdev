import React from 'react';
import { Container, Dot, Text } from './styles';

interface Props {
  children: React.ReactNode;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
  className?: string;
}

const Status: React.FC<Props> = ({ children, color, ...props }) => {
  return (
    <Container {...props}>
      <Dot color={color} />
      <Text>{children}</Text>
    </Container>
  );
};

export default Status;
