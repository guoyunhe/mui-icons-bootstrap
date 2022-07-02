import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function DropletFill(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
    </SvgIcon>
  );
}
