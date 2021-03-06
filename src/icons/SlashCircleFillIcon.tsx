import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function SlashCircleFillIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/>
    </SvgIcon>
  );
}
