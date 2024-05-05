import React from 'react';
import { Button } from './styles';

interface Props {
  children?: any;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'critical' | 'info' | 'success';
  disabled?: boolean;
  className?: string;
  onClick?: any;
  style?: object;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: 'lg' | 'sm' | 'md';
  title?: string;
}

const ContainedButton: React.FC<Props> = ({
  type,
  color,
  children,
  disabled,
  className,
  onClick: click,
  loading,
  fullWidth,
  size,
  rounded,
  ...props
}) => {
  return (
    <>
      <Button
        type={type ?? 'button'}
        className={className}
        disabled={disabled === true || loading === true}
        onClick={click}
        color={color ?? 'primary'}
        fullWidth={fullWidth ?? false}
        rounded={rounded ?? false}
        size={size ?? 'md'}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </Button>
    </>
  );
};

export default ContainedButton;
