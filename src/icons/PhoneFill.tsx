import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function PhoneFill(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
    </SvgIcon>
  );
}
