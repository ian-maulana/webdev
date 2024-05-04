import styled from '@emotion/styled';

export const Text = styled('div')((props) => {
  return {
    color: props.theme.color.primary,
  };
});
