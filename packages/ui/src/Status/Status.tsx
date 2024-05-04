import React from 'react';
import { Container, Dot, Text } from './styles';

interface StatusProps {
  children: React.ReactNode;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
  className?: string;
}

const Status: React.FC<StatusProps> = ({ children, color, ...props }) => {
  return (
    <Container {...props}>
      <Dot color={color} />
      <Text>{children}</Text>
    </Container>
  );
};

export default Status;
