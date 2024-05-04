import React from 'react';

import { Container } from './styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Card;
