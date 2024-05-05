import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')((props: { theme?: Theme }) => {
  return {
    marginBottom: props.theme!.size.s16,
  };
});

export const Label = styled('div')((props: {
  theme?: Theme;
  htmlFor: string;
}) => {
  return {
    marginBottom: props.theme!.size.s16,
    fontWeight: props.theme!.fontWeight.semiBold,
    fontSize: props.theme!.fontSize.sm,
    display: 'block',
    color: props.theme!.color.text,
  };
});
