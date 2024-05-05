import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Backdrop = styled('div')((): any => ({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 1050,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: 0.5,
}));

export const Contaainer = styled('div')((): any => ({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 1055,
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: '0',
}));

// lg = 800
export const Container: any = styled('div')((props: {
  size: 'md' | 'lg' | 'xl';
}) => {
  let width = '500px';

  if (props.size === 'md') {
    width = '800px';
  } else if (props.size === 'lg') {
    width = '1140px';
  } else if (props.size === 'xl') {
    width = '1449px';
  }

  return {
    transition: 'transform .3s ease-out',
    transform: 'none',
    margin: '1.75rem auto',
    minHeight: 'calc(100% - 3.5rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
    maxWidth: width,
  };
});

export const Content = styled('div')((): any => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid rgba(0,0,0,.2)',
  outline: '0',
  borderRadius: '20px',
}));

export const Header = styled('div')((props: { theme: Theme }) => ({
  borderTopLeftRadius: props.theme!.size.s20,
  borderTopRightRadius: props.theme!.size.s20,
  display: 'flex',
  justifyContent: 'space-between !important',
  padding: '20px 25px',
  alignItems: 'center',
}));

export const Title = styled('div')((props: { theme: Theme }) => ({
  fontWeight: props.theme!.fontWeight.bold,
  fontSize: props.theme!.fontSize.lg,
  color: props.theme!.color.text,
}));

export const Description = styled('div')((props: { theme: Theme }) => ({
  fontWeight: props.theme!.fontWeight.normal,
  fontSize: props.theme!.fontSize.sm,
  color: props.theme!.color.text,
}));

export const Close = styled('button')(
  (props: {
    theme?: Theme;
    color:
      | 'primary'
      | 'success'
      | 'warning'
      | 'critical'
      | 'secondary'
      | 'info';
  }) => ({
    margin: '0',
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // boxSizing: 'content-box',
    width: '24px',
    height: '24px',
    color: '#000',
    opacity: 0.5,
    border: '1px solid transparent',
    cursor: 'pointer',

    '& svg': {
      width: '16px',
      height: '16px',

      '& path': {
        fill: props.theme!.color.primary,
      },
    },
  }),
);
