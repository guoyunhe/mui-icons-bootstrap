import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function Option(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5zm10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
    </SvgIcon>
  );
}
