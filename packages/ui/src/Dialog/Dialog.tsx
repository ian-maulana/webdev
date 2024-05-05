import React from 'react';
import {
  Backdrop,
  Close,
  Description,
  Contaainer,
  Content,
  Container,
  Header,
  Title,
} from './styles';

interface Props {
  visible: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
  title?: string | null;
  onClose: Function;
  children: any;
  description?: string;
  showClose?: boolean;
}

const Dialog: React.FC<Props> = ({
  visible,
  size,
  title,
  onClose,
  children,
  description,
}) => {
  const eventClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {visible && <Backdrop />}

      {visible && (
        <Contaainer>
          <Container size={size}>
            <Content>
              {title && (
                <Header>
                  <div>
                    {title && <Title>{title}</Title>}
                    {description && <Description>{description}</Description>}
                  </div>
                  <Close type="button" onClick={eventClose} color="primary">
                    x
                  </Close>
                </Header>
              )}

              <div className="main-content">{children}</div>
            </Content>
          </Container>
        </Contaainer>
      )}
    </>
  );
};

export default Dialog;
