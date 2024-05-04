import React from 'react';
import { Container } from './styles';

interface DividerProps {}

const Divider: React.FC<DividerProps> = (props) => {
  return <Container style={props} />;
};

export default Divider;
