import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')((props: {
  theme?: Theme;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
}) => {
  return {
    backgroundColor:
      props.theme!.color[props.color ?? 'primary'] ??
      props.theme!.color.primary,
    color: props.theme!.color.white,
    display: 'inline-block',
    fontSize: props.theme!.fontSize.sm,
    fontWeight: props.theme!.fontWeight.normal,
    borderRadius: props.theme!.radius.r16,
    paddingTop: props.theme!.size.s5,
    paddingBottom: props.theme!.size.s5,
    paddingLeft: props.theme!.size.s16,
    paddingRight: props.theme!.size.s16,
  };
});
