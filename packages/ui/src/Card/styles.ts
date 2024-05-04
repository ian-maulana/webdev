import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')((props: { theme?: Theme }) => {
  return {
    borderColor: props.theme!.color.border,
    borderRadius: props.theme!.radius.r10,
    backgroundColor: props.theme!.color.white,
    boxShadow: `rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px`,
    padding: props.theme!.size.s16,
    marginBottom: props.theme!.size.s16,
  };
});
