import React from 'react';
import { Container } from './styles';

interface BadgeProps {
  children: React.ReactNode;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color, ...props }) => {
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  );
};

export default Badge;
