import React from 'react';

interface VisibleProps {
  children: React.ReactNode;
  visible: boolean;
}

const Visible: React.FC<VisibleProps> = ({ children, visible }) => {
  return <>{visible === true ? children : null}</>;
};

export default Visible;
