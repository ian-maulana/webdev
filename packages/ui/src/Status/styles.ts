import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')((props: { theme?: Theme }) => {
  return {
    fontSize: props.theme!.fontSize.sm,
    fontWeight: props.theme!.fontWeight.medium,
    display: 'flex',
    alignItems: 'center',
  };
});

export const Dot = styled('div')((props: {
  theme?: Theme;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
}) => {
  return {
    width: props.theme!.size.s10,
    height: props.theme!.size.s10,
    marginRight: props.theme!.size.s5,
    backgroundColor:
      props.theme?.color[props.color ?? 'primary'] ??
      props.theme!.color.primary,
    borderRadius: props.theme!.radius.r24,
  };
});

export const Text = styled('div')((props: { theme?: Theme }) => {
  return {
    paddingLeft: props.theme!.size.s5,
    fontSize: props.theme!.fontSize.md,
  };
});
