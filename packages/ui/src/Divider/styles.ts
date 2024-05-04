import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')((props: { theme?: Theme }) => {
  return {
    height: '1px',
    marginTop: props.theme?.size.s16,
    marginBottom: props.theme?.size.s16,
    backgroundColor: props.theme?.color.border,
  };
});
