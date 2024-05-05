import React from 'react';
import { Container, Label } from './styles';

interface FormGroupProps {
  name: string;
  label?: string;
  children: any;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  className,
  ...props
}) => {
  const { name, label } = props;

  return (
    <Container className={className}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {children}
    </Container>
  );
};

export default FormGroup;
