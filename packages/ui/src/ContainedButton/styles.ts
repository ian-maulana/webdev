import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled('button')((props: {
  theme?: Theme;
  color: 'primary' | 'success' | 'warning' | 'critical' | 'secondary' | 'info';
  rounded: boolean;
  fullWidth: boolean;
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
}) => {
  let color = props.theme!.color.white;
  let bgColor = props.theme!.color.primary;
  let borderColor = props.theme!.color.primary;
  let hoverBgColor = props.theme!.color.primary;
  let hoverBorderColor = props.theme!.color.primary;
  let hoverColor = props.theme!.color.primary;

  let pt = props.theme!.size.s10;
  let pb = props.theme!.size.s10;
  let fontSize = props.theme!.fontSize.md;

  switch (props.color) {
    case 'primary':
      bgColor = props.theme!.color.primary;
      borderColor = props.theme!.color.primary;
      color = props.theme!.color.white;
      hoverBorderColor = props.theme!.color.primary;
      hoverBgColor = props.theme!.color.white;
      break;

    case 'success':
      bgColor = props.theme!.color.success;
      borderColor = props.theme!.color.success;
      color = props.theme!.color.white;
      hoverBorderColor = props.theme!.color.primary;
      hoverBgColor = props.theme!.color.white;
      break;

    case 'critical':
      bgColor = props.theme!.color.critical;
      borderColor = props.theme!.color.critical;
      color = props.theme!.color.white;
      hoverBorderColor = props.theme!.color.critical;
      hoverBgColor = props.theme!.color.white;
      break;

    case 'info':
      bgColor = props.theme!.color.info;
      borderColor = props.theme!.color.info;
      color = props.theme!.color.white;
      hoverBorderColor = props.theme!.color.info;
      hoverBgColor = props.theme!.color.white;
      break;

    case 'secondary':
      bgColor = props.theme!.color.secondary;
      borderColor = props.theme!.color.secondary;
      color = props.theme!.color.white;
      hoverBorderColor = props.theme!.color.secondary;
      hoverBgColor = props.theme!.color.white;
      break;
  }

  switch (props.size) {
    case 'lg':
      pb = props.theme!.size.s16;
      pt = props.theme!.size.s16;
      fontSize = props.theme!.fontSize.lg;
      break;

    case 'sm':
      pb = props.theme!.size.s5;
      pt = props.theme!.size.s5;
      fontSize = props.theme!.fontSize.sm;
      break;
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: props.theme!.fontFamily.primary,
    fontWeight: props.theme!.fontWeight.semiBold,
    lineHeight: 1.5,
    color: color,
    justifyContent: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    backgroundColor: bgColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: borderColor,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: props.theme!.size.s20,
    paddingRight: props.theme!.size.s20,
    fontSize: fontSize,
    borderRadius: props.rounded ? '60px' : props.theme!.radius.r10,
    transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out`,
    width: props.fullWidth ? '100%' : 'auto',

    '&:hover': {
      backgroundColor: hoverBgColor,
      borderColor: hoverBorderColor,
      color: hoverColor,
    },

    '&:disabled': {
      color: props.theme!.color.text,
      borderColor: props.theme!.color.border,
      backgroundColor: props.theme!.color.disabled,
    },
  };
});
